import React , {useState , useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home'
import Contacts from './Components/Pages/Contacts'
import ClassicAuto from './Components/Pages/ClassicAuto';
import JeyTyers from './Components/Pages/JeyTyers';
import Features from './Components/Pages/Features';
import PreLoader from './Components/PreLoader/PreLoader';
import Footer from './Components/Pages/Footer';

function App() {
  const [state,setState] =useState(true)
  
  
  useEffect(()=>{
    setTimeout(() => {
        setState(false)
    }, 5000);
  },[state])
  return (
    <div className="App">
      
     
   
      <Router>
      
      <NavBar />

        
        <Routes>
         <Route path="/home" exact element={<Home />}></Route>
         <Route path="/contacts" exact element={<Contacts />}></Route>
         <Route path="/features" exact element={<Features />}></Route>
         <Route path="/classicauto" exact element={<ClassicAuto />}></Route>
         <Route path="/jeytyers" exact element={<JeyTyers />}></Route>
        </Routes>
        <Footer />
      </Router>
   
    
     
    </div>
  );
}

export default App;
