export const formatCurrency = (amount: number, currency: SupportedCurrencies) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)
}

export const formatTimestamp = (date: Date) => {
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}
