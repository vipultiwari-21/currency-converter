// selecting the currency section code is here 

// Array of currency codes
const CurrencyCodes = [
    "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
    "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
    "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
    "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
    "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
    "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
    "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
    "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
    "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
    "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
    "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
    "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
    "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD",
    "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY",
    "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES",
    "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW",
    "ZWL"
];
const CurrencySelect = ({selectedCurrency, handleCurrency}) => {
    {/* Receiving the prop and using it as select value */}

    // updating the country flag
// Extract the coutry code from the selected currency code
    const countryCode = selectedCurrency.substring(0, 2)

  return (
    <div className="currency-select">
    <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} alt="Flag" />
    <select 
      onChange={handleCurrency}
      className="currency-dropdown" value={selectedCurrency}>
      {CurrencyCodes.map(currency=>(
    /* options is an jsx*/    <option key={currency} value={currency}>{currency}</option> /* this curency shows the currency code as dropdown list*/
      ))}
    </select>
    {/* TODO: The .map() method is used to iterate over each currency code in the CurrencyCodes array.
              For each currency code, an <option> element is created.
              The key attribute is set to the currency code for unique identification.
              The value attribute is set to the currency code for form submission.
              The currency code itself is displayed as the text inside each <option> element.*/}
  </div>
  )
}

export default CurrencySelect;