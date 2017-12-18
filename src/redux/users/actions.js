export const USERS_FETCH_REQUESTED = 'USERS_FETCH_REQUESTED'

const payload = [
  {
    id: 1,
    first_name: 'Aldo',
    last_name: 'Clouter',
    email: 'aclouter0@mozilla.com',
    gender: 'Male',
    ip_address: '77.116.216.219'
  },
  {
    id: 2,
    first_name: 'Zak',
    last_name: 'Argente',
    email: 'zargente1@alexa.com',
    gender: 'Male',
    ip_address: '123.166.48.126'
  },
  {
    id: 3,
    first_name: 'Cyrillus',
    last_name: 'Collinson',
    email: 'ccollinson2@free.fr',
    gender: 'Male',
    ip_address: '58.101.217.177'
  },
  {
    id: 4,
    first_name: 'Ynez',
    last_name: 'Bianco',
    email: 'ybianco3@google.it',
    gender: 'Female',
    ip_address: '166.71.194.72'
  },
  {
    id: 5,
    first_name: 'Bill',
    last_name: 'Bard',
    email: 'bbard4@so-net.ne.jp',
    gender: 'Male',
    ip_address: '17.143.96.218'
  },
  {
    id: 6,
    first_name: 'Wernher',
    last_name: 'Bairnsfather',
    email: 'wbairnsfather5@salon.com',
    gender: 'Male',
    ip_address: '7.215.83.157'
  },
  {
    id: 7,
    first_name: 'Margette',
    last_name: 'MacVagh',
    email: 'mmacvagh6@yahoo.com',
    gender: 'Female',
    ip_address: '232.32.134.125'
  },
  {
    id: 8,
    first_name: 'Addison',
    last_name: 'Ullett',
    email: 'aullett7@zimbio.com',
    gender: 'Male',
    ip_address: '36.201.134.187'
  },
  {
    id: 9,
    first_name: 'Sherri',
    last_name: 'Greasty',
    email: 'sgreasty8@xrea.com',
    gender: 'Female',
    ip_address: '19.246.90.78'
  },
  {
    id: 10,
    first_name: 'Celestyna',
    last_name: 'MacMoyer',
    email: 'cmacmoyer9@myspace.com',
    gender: 'Female',
    ip_address: '33.192.129.114'
  }
]

export const fetchUsers = () => {
  return {
    type: USERS_FETCH_REQUESTED,
    payload
  }
}
