import * as fetch from 'node-fetch';
import { getLatestCurrencyData } from "./currency";
import MockResponse from '../../fixtures/CurrencyConversionResponse';

describe('Currency Request', () => {
  let mockFetch: jest.Mock;

  beforeEach(() => {
    // @ts-ignore
    mockFetch = jest.spyOn(fetch, 'default').mockResolvedValue({
      json: jest.fn().mockResolvedValue(MockResponse)
    });
  })

  it('should be defined', () => {
    expect(getLatestCurrencyData).toBeDefined();
  });

  it('should convert the passed params into a query string', async () => {
    const mock = jest.fn(getLatestCurrencyData);

    const args: CurrencyConversionParams = {
      from: 'USD',
      to: 'BRL',
      amount: 1,
      language: 'en',
      format: 'json',
    }

    await mock(args)

    expect(mockFetch).toHaveBeenCalled()

    let [, query] = mockFetch.mock.calls[0][0].split('?');

    query.split('&').forEach((param: string) => {
      const [key, val] = param.split('=')

      expect(args[key]?.toString()).toEqual(val)
    })
  })

  it('should return the rates portion of the response', async () => {
    const mock = jest.fn(getLatestCurrencyData);

    const args: CurrencyConversionParams = {
      from: 'USD',
      to: 'BRL',
      amount: 1,
      language: 'en',
      format: 'json',
    }

    await mock(args)

    expect(mockFetch).toHaveBeenCalled()

    const result = mock.mock.results[0]
    expect(await result.value).toEqual(MockResponse)
  })
})
