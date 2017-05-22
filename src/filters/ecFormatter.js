export default ec => {
  const reg = /\d+$/
  const arr = ec.split(' ')
  return arr.map(item => {
    let r = reg.exec(item)
    return reg.test(item) ? item.replace(reg, `<sup>${r[0]}</sup>`) : item
  }).join(' ')
}
