const decimalFormatter = new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})
const smallDecimalFormatter = new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 6,
})

export function usdFormatter(value) {
  if (!Number.isFinite(+value)) return 'No data'

  return (
    '$' + (value >= 2 ? decimalFormatter : smallDecimalFormatter).format(value)
  )
}
