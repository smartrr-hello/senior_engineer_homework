import { formatCurrency } from '../../utils';
import styles from './CurrencyDisplay.module.scss';

export interface CurrencyDisplayProps {
  /** The currency being converted */
  from: SupportedCurrencies;
  /** Amount of currency converted. */
  amountToConvert: number;
  /** The resulting converted currency */
  to: SupportedCurrencies;
  /** The rate at which the currency is valued at */
  conversionRate: number | string;
  /** Amount converted. */
  resultingAmount: number | string;
  /** An id used to target this component in testing. */
  dataTestid?: string;
}

function CurrencyDisplay({
  from,
  amountToConvert,
  to,
  conversionRate,
  resultingAmount
}: CurrencyDisplayProps) {

  return (
    <div className={styles.CurrencyDisplay}>
      <div>
        <h2>{from}</h2>
        &nbsp;
        <div>
          <div style={{ textAlign: 'center' }}>⇌</div>
          <div style={{ textAlign: 'center' }}>Current Rate: <br/>{formatCurrency(conversionRate as number, to)}</div>
        </div>
        &nbsp;
        <h2>{to}</h2>
      </div>
      <div>
        <h2>{formatCurrency(amountToConvert as number, from)}</h2>
        &nbsp;
        <div>⇌</div>
        &nbsp;
        <h2>{formatCurrency(resultingAmount as number, to)}</h2>
      </div>
    </div>
  )
}

export default CurrencyDisplay;
