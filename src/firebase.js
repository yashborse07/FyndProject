

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAyPyVWBPsZGLqYUTBXKoh86GAqmNQU1As",
  authDomain: "ploggers-e8ced.firebaseapp.com",
  projectId: "ploggers-e8ced",
  storageBucket: "ploggers-e8ced.appspot.com",
  messagingSenderId: "77501873993",
  appId: "1:77501873993:web:54a34f82248e6408642498"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
