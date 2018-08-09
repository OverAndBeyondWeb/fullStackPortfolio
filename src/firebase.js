import { initializeApp} from 'firebase';


const app = initializeApp({
  apiKey: "AIzaSyDO9KlcmdJeRqqFIcJP-TBaf4jL7lX-Pps",
  authDomain: "newportfolio-9056f.firebaseapp.com",
  databaseURL: "https://newportfolio-9056f.firebaseio.com",
  projectId: "newportfolio-9056f",
  storageBucket: "newportfolio-9056f.appspot.com",
  messagingSenderId: "540444907994"
});

export const adminRef = app.database().ref('administrator');
export const projectsRef = app.database().ref('projects');
export const contactsRef = app.database().ref('contacts');