import { formatCurrency } from "./Utils";

describe('Utils', () => {
  describe('formatCurrency()', () => {
    it ('should be defined', () => {
      expect(formatCurrency).toBeDefined
    })

    it('should correctly format USD currency', () => {
        const mock = jest.fn(formatCurrency)

        mock(1, 'USD');

        expect(mock).toHaveLastReturnedWith('$1.00')
    })
  })


})
