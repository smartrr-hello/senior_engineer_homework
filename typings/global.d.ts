interface AttributeMap {
  [key: string | symbol]: string | number | boolean | string[] | number[] | boolean[] | undefined | null;
}

type SupportedCurrencies = 'USD' | 'BRL'
type APISupportedLanguages = 'en' | 'ru' | 'zh' | 'es' | 'ar' | 'fr' | 'fa' | 'ja' | 'pl' | 'it' | 'pt' | 'de'

interface CurrencyConversionParams extends AttributeMap {
  /** The symbol of the currency to convert from. */
  from: SupportedCurrencies;
  /** The symbol of the currency to convert to. */
  to: SupportedCurrencies;
  /** The amount of the original currency to convert */
  amount: number;
  /** The format the api should return. Defaults to json. */
  format?: 'json' | 'xml';
  /** The abbreviations of the language to format the response in. Default is 'en' for english.  */
  language?: APISupportedLanguages;
}

interface ConvertedRate {
    /** The plain name of the requested currency conversion. */
    currency_name: string;
    /** The basic rate used in the conversion calculations. */
    rate: string;
    /** The rate used based on the amount submitted in the params. */
    rate_for_amount: string;
}

type ConvertedRates = Record<SupportedCurrencies, ConvertedRate>

interface CurrencyConversionResponse {
  /** The amount converted */
  amount: string;
  /** The currency code submitted as from in the params. */
  base_currency_code: SupportedCurrencies;
  /** The plain name of the currency code. */
  base_currency_name: string;
  /** A JSON object used to add the result data for the conversions. */
  rates: ConvertedRates
  /** The success of the conversion calculations. */
  status: string;
  /** The last update made to this conversion rate. */
  updated_data: string;
}
