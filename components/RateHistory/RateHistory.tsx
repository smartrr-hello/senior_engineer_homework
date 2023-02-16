import { formatCurrency, formatTimestamp } from '../../utils';
import styles from './RateHistory.module.scss';

interface RateHistoryProps {
  /** An array of conversion request records. */
  records: HistoricalRecord[];
  /** An id used to target the component in testing. */
  dataTestid?: string;
}

function RateHistory({
  records
}: RateHistoryProps) {
  return (
    <div className={styles.RateHistory}>
      <h2 className={styles.title}>Conversion Record History <br/> (last 24hrs)</h2>
      <ul>
        {records.map((record) => (<RateRecord key={record.timestamp} {...record} />) )}
      </ul>
    </div>
  )
}

function RateRecord({
  amount,
  baseCurrency,
  currencyConverted,
  rate: {
    rate,
  },
  timestamp,
}: HistoricalRecord) {
  return (
    <div className={styles.RateRecord}>
      <div>
        <div><b>Timestamp:</b> {formatTimestamp(new Date(timestamp))}</div>
        <div className={styles.currencies}>
          <div><b>From:</b> {baseCurrency}</div>&nbsp;
          <div><b>To:</b> {currencyConverted}</div>
        </div>
      </div>
      <div>
        <div className={styles.rate}><b>Rate:</b> {formatCurrency(parseFloat(rate), currencyConverted)}</div>
      </div>
    </div>
  )
}

export default RateHistory;
