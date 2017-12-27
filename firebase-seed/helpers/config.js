const firebase = require('firebase')
const config = {
  apiKey: 'AIzaSyAyoYZiLf3UHHpMLIDyhMq7qfrjzjwwMJk',
  authDomain: 'admin-reactified.firebaseapp.com',
  databaseURL: 'https://admin-reactified.firebaseio.com',
  projectId: 'admin-reactified',
  storageBucket: 'admin-reactified.appspot.com',
  messagingSenderId: '887158482133'
}

// Initialize the default app
const defaultApp = firebase.initializeApp(config)
const database = defaultApp.database()
module.exports = database
