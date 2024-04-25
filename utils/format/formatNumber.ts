
const formatNumber = (number: string | number | undefined, decimal?: number) => {
  const value = number?.toString()
  if (number !== undefined) {
    if (decimal) {
      const x = parseFloat(value || '0')?.toFixed(decimal)
      const y = x?.split('.')
      const z = parseInt(y?.[0])?.toLocaleString()
      return `${z}.${y?.[1]}`
    } else {
      return number?.toLocaleString()
    }
  } else {
    return '-'
  }
}

export default formatNumber