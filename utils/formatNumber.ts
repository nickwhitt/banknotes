export default function (value?: number, digits: number = 3) {
  if (typeof value === 'undefined' || isNaN(value)) {
    return '-'
  }

  let options = {}
  if (value >= 100000) {
    options = { notation: 'compact', maximumSignificantDigits: digits }
  }

  return Intl.NumberFormat('en-US', options).format(value)
}
