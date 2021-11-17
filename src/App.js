import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home/Home";

import Notes from './pages/Notes.js';
import Signup from "./pages/signUp";
import {onAuthStateChanged} from "firebase/auth"
import { useEffect, useState } from "react";


function App() {
  const [user, setUser] = useState();
 
  const {currentUser} = useAuth();
  console.log(!currentUser);
  return (
   
  
  <Router >
    <Routes>

  <Route path="/" exact 

   element={currentUser ? <Notes /> : <Home />}
  />
  <Route element={<Signup />} path="/signup" exact />

 
  </Routes>
  </Router>
  
   

  
    
  );
}

export default App;
