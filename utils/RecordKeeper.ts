import { NextApiRequest, NextApiResponse, GetServerSidePropsContext } from 'next';
import { setCookie, parseCookies } from 'nookies'

const COOKIE_NAME = 'RECORD_HISTORY';
const COOKIE_PATH = '/';
const ONE_WEEK = 7 * 24 * 60 * 60;
const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;
export default class RecordKeeper {
  res?: NextApiResponse | GetServerSidePropsContext['res'];
  data: HistoricalRecord[];

  constructor(
    req?: NextApiRequest | GetServerSidePropsContext['req'],
    res?: NextApiResponse | GetServerSidePropsContext['res']
  ) {
    let history;
      if (req && res) {
        // Serverside cookie parsing
        this.res = res;
        history = parseCookies({ req }, { path: COOKIE_PATH })[COOKIE_NAME] || null
      } else {
        // Browser cookie parsing
        history = parseCookies(undefined, { path: COOKIE_PATH })[COOKIE_NAME] || null
      }

      this.data = history ? JSON.parse(history) : []
  }

  get(): HistoricalRecord[] {
    return this.data;
  }

  add({
    base_currency_code,
    rates,
    amount
  }: CurrencyConversionResponse,
  currencyConverted: SupportedCurrencies,
  timestamp: Date) {
    this.data.push({
      baseCurrency: base_currency_code,
      amount,
      currencyConverted,
      rate: rates[currencyConverted],
      timestamp: timestamp.toISOString()
    } as HistoricalRecord)

    this.save();
  }

  save() {
    const oneDayAgo = new Date().getTime() - ONE_DAY_IN_MS;

    // Filter out historical records older than a day.
    const newData = this.data.filter(({ timestamp }) => {
        return new Date(timestamp).getTime() >= oneDayAgo;
    })

    if (this.res)
      setCookie({ res: this.res }, COOKIE_NAME, JSON.stringify(newData), { path: COOKIE_PATH, maxAge: ONE_WEEK });
    else
      setCookie(undefined, COOKIE_NAME, JSON.stringify(newData), { path: COOKIE_PATH, maxAge: ONE_WEEK });

    this.data = newData;
  }
}
