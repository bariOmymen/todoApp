import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const app = initializeApp({
    apiKey: "AIzaSyCrxHOxjCiRC_9-OtZw3Uoh2brfE6s5tPU",
  authDomain: "todo-9c835.firebaseapp.com",
  projectId: "todo-9c835",
  storageBucket: "todo-9c835.appspot.com",
  messagingSenderId: "1076397400904",
  appId: "1:1076397400904:web:269abcab2ecc19e477497d"
})

export const auth = getAuth(app);
export default app;
