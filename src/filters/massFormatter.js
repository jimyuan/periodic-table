export default mass => {
  if (mass === '') {
    return ''
  } else if (Array.isArray(mass)) {
    return mass
  }
  return parseFloat(mass).toFixed(3)
}
