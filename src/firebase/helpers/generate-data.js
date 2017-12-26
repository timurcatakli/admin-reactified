const moment = require('moment')

const generateData = (times, obj) => {
  const result = []
  for (let i = 1; i <= times; i++) {
    let num = Math.floor(Math.random() * 10) + 1
    num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1
    const dataObj = {}

    dataObj.date = moment()
      .subtract(i - 1, 'month')
      .format('MM/DD/YYYY')

    Object.keys(obj).forEach(key => {
      dataObj[key] = obj[key]
      switch (key) {
      case 'stars':
        obj[key] -= 0.1
        break
      case 'keyword':
        dataObj[key] = obj[key]
        break
      case 'sticky':
        delete dataObj[key]
        break
      default:
        obj[key] += num
      }
    })
    result.push(dataObj)
  }
  return result
}

module.exports = generateData
