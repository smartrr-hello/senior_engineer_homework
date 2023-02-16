import { render } from '@testing-library/react';
import { formatCurrency } from '../../utils';
import CurrencyDisplayProps from '../../fixtures/CurrencyDisplayProps';
import CurrencyDisplay from './CurrencyDisplay';

describe('CurrencyDisplay', () => {
  it('should be defined', () => {
    expect(CurrencyDisplay).toBeDefined()
  })

  it('should render with all the correct information', () => {
      const { getByText } = render(<CurrencyDisplay {...CurrencyDisplayProps} />);

      const {
        from,
        to,
        amountToConvert,
        resultingAmount
      } = CurrencyDisplayProps

      expect(getByText(from)).toBeInTheDocument()
      expect(getByText(to)).toBeInTheDocument()
      expect(getByText(formatCurrency(amountToConvert, from))).toBeInTheDocument()
      expect(getByText(formatCurrency(resultingAmount, to))).toBeInTheDocument()
  })
})
