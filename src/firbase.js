import { initializeApp} from 'firebase';


const app = initializeApp({
  apiKey: "AIzaSyCbZrD1L9OwmW-SV_dl3-Vl0fkRpIko_sM",
  authDomain: "portfolio-7e735.firebaseapp.com",
  databaseURL: "https://portfolio-7e735.firebaseio.com",
  projectId: "portfolio-7e735",
  storageBucket: "portfolio-7e735.appspot.com",
  messagingSenderId: "706108159771"
});

export const db = app.database();