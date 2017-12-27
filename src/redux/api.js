import database from 'helpers/firebase'

export const fetchData = () => {
  let result = {}
  const ref = database.ref('twitter/fletcher-jones')
  ref.on('value', snapshot => {
    result =  snapshot.val()
  })
  return result
}
