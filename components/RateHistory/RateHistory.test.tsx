import { render } from '@testing-library/react';
import RateHistory from './RateHistory';
import { formatTimestamp, formatCurrency } from '../../utils';
import HistoricalRecords from '../../fixtures/HistoricalRecords';

describe('RateHistory', () => {
  it('should be defined', () => {
    expect(RateHistory).toBeDefined()
  })

  it('should render the correct information for any Historical Record', () => {
      const { container } = render(<RateHistory records={HistoricalRecords} />)

      const randomIndex = Math.floor(Math.random() * (HistoricalRecords.length -1))

      const list = container.querySelector('ul');

      const data = HistoricalRecords[randomIndex];
      const item = list?.children[randomIndex];

      expect(item).toHaveTextContent(data.baseCurrency)
      expect(item).toHaveTextContent(data.currencyConverted)
      expect(item).toHaveTextContent(data.baseCurrency)
      expect(item).toHaveTextContent(formatCurrency(parseFloat(data.rate.rate), data.currencyConverted))
      expect(item).toHaveTextContent(formatTimestamp(new Date(data.timestamp)))
  });
})
