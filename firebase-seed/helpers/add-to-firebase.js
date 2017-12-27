const addToFirebase = (data, ref) => {
  for (let i = 0; i < data.length; i++) {
    ref.push(data[i])
  }
}

module.exports = addToFirebase
