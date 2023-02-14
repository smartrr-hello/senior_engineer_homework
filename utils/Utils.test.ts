import { formatCurrency, formatTimestamp } from "./Utils";
import RecordKeeper from './RecordKeeper';

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

  describe('formatTimestamp()', () => {
    it ('should be defined', () => {
      expect(formatCurrency).toBeDefined
    })


    it('should return a string containing a local date and local time', () => {
      const mock = jest.fn(formatTimestamp)
      const testDate = new Date();

     mock(testDate);
      const val = mock.mock.results[0].value;
      expect(val).toContain(testDate.toLocaleDateString());
      expect(val).toContain(testDate.toLocaleTimeString());
    })
  })

  describe('RecordKeeper()', () => {
    it('should be defined', () => {
      expect(RecordKeeper).toBeDefined();
    })

    /** TODO: Mock Next api modules and nookies for validating cookies. */
  })
})
