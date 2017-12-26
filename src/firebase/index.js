const generateData = require('./helpers/generate-data')
const addToFirebase = require('./helpers/add-to-firebase')
const wipeSeedData = require('./helpers/wipe-seed-data')
const database = require('./helpers/config')
const rootRef = database.ref('/')

const addSeedData = key => {
  const seedData = require(`./data-collections/${key}`)
  const sitesRef = rootRef.child(`sites/${key}`)
  const mainAccount = 'fletcher-jones'
  if (key === mainAccount) {
    const accountsRef = rootRef.child(`accounts/${key}`)
    accountsRef.set({
      competitors: ['mercedes-of-san-jose', 'burlingame-mercedes']
    })
  }
  sitesRef.set(seedData.account)

  const times = 4
  try {
    Object.keys(seedData).forEach(topic => {
      switch (topic) {
      case 'account':
        break
      default:
        const data = seedData[topic]
        const ref = rootRef.child(`${topic}/${key}`)
        if (data.sticky) {
          ref.update({ sticky: data.sticky })
        }
        const generatedData = generateData(times, data)
        addToFirebase(generatedData, ref)
        break
      }
    })
  } catch (e) {
    console.log(e.name + ': ' + e.message)
  }
}

wipeSeedData(rootRef)
addSeedData('fletcher-jones')
addSeedData('mercedes-of-san-jose')
addSeedData('burlingame-mercedes')
