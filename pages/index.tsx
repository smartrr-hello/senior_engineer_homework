import { useState, useEffect } from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { GetServerSidePropsContext } from 'next';
import cx from 'classnames';
import fetch from 'node-fetch';
import { RecordKeeper } from '../utils';
import CurrencyDisplay from '../components/CurrencyDisplay';
import RateHistory from '../components/RateHistory';
import { useInterval } from '../hooks';
import styles from '../styles/Home.module.scss'

const ONE_HOUR_IN_MS = 1000 * 60 * 60;

export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
  const response = await fetch('http://localhost:3000/api/latest');
  const rates = await response.json() as CurrencyConversionResponse['rates'];

  return {
    props: {
      initRate: rates['BRL']
    }, // will be passed to the page component as props
  }
}

interface HomeProps {
  /** The initial rate on page load. */
  initRate: ConvertedRate
}

const UpdateRequester = dynamic(() => import('../components/UpdateRequester'), { ssr: false })

export default function Home({
  initRate
}: HomeProps) {
  const [time, setTime] = useState(new Date())
  const [inFlight, setInFlight] = useState(false)
  const [latestRate, setLatestRate] = useState<ConvertedRate>(initRate);
  const [history, setHistory] = useState<HistoricalRecord[]>([])

  const fetchRate = async (time: Date) => {
    setInFlight(true);
    const response = await fetch(`/api/latest?time=${time.getTime()}`);

    const rates = await response.json() as CurrencyConversionResponse['rates'];
    setInFlight(false)
    setTime(time)
    setLatestRate(rates['BRL']);
  }

  useEffect(() => {
    const records = new RecordKeeper();

    setHistory([...records.get()]);

  }, [latestRate])

  useInterval(() => {
    fetchRate(new Date());
  }, ONE_HOUR_IN_MS)

  return (
    <div className={cx(styles.Home, styles.container)}>
      <Head>
        <title>USD to BRL</title>
        <meta name="description" content="Check out the conversion rate between USD and BRL" />
      </Head>
      <h1 className={styles.title}>
          Welcome to USD to BRL Monitor
        </h1>
      <main className={styles.main}>
        <UpdateRequester onRequestUpdate={fetchRate} rotateIcon={inFlight} currentTime={time}/>
        {latestRate && <CurrencyDisplay from='USD' to='BRL' amountToConvert={1} resultingAmount={latestRate.rate_for_amount} conversionRate={latestRate.rate} />}
        {history && <RateHistory records={history}  />}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://rapidapi.com/natkapral/api/currency-converter5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by the Currency Converter API
        </a>
      </footer>
    </div>
  )
}
