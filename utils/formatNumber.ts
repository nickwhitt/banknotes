export default function (value: number | undefined) {
  if (typeof value === 'undefined' || isNaN(value)) {
    return '-'
  }

  let options = {}
  if (value >= 100000) {
    options = { notation: 'compact', maximumSignificantDigits: 3 }
  }

  return Intl.NumberFormat('en-US', options).format(value)
}
