import fetch from 'node-fetch';

const RAPID_API_HOST = 'currency-converter5.p.rapidapi.com';
const RAPID_API_KEY = process.env.RAPID_API_KEY;
const headers = {
  'X-RapidAPI-Key': RAPID_API_KEY ?? '',
  'X-RapidAPI-Host': RAPID_API_HOST
}

export const getLatestCurrencyData = async (params: CurrencyConversionParams): Promise<CurrencyConversionResponse> => {
  const DEFAULT_PARAMS: Partial<CurrencyConversionParams> = {
    format: 'json',
    language: 'en'
  }

  const finalParams: CurrencyConversionParams = {
    ...DEFAULT_PARAMS,
    ...params,
  }

  const query = Object.keys(finalParams).map((e) => `${e}=${finalParams[e]}`)

  const url = `https://${RAPID_API_HOST}/currency/convert?` + query.join('&');

  const response = await fetch(url, {
    headers,
  })

  return (await response.json() as CurrencyConversionResponse);
}
