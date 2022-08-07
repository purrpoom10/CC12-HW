console.log(extractCurrencyValue('$120', 30)); // THB3600

function extractCurrencyValue(string, rate) {
  return string.slice(1, string.length) * rate;
}
