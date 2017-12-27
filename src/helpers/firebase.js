import firebase from 'firebase'
import { firebaseConfig } from 'config.js'

// Initialize the default app
const defaultApp = firebase.initializeApp(firebaseConfig)
const database = defaultApp.database()
export default database
