import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
 import About from './Components/About';
import React,  { useState } from 'react';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
  const[mode, setMode] =useState('light');
  const[alert, setAlert] =useState(null);

  const showAlertMessage=(message, type)=>{
    let alertType = type.toLowerCase();
    setAlert({
      msg:message,
      type:alertType
     })
     setTimeout(()=>{
      setAlert(null);

    },1500);
    }
    
  
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#052c65";
      showAlertMessage("DarkMode has been enabled" ,  "Success ");
      document.title ='TextUtils'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlertMessage("LightMode has been enabled" ,  "Success ");
      document.title ='TextUtils'
    }
  }
  return (
    <>
    <Router>
     <Navbar title = "TEXTUTILS" about ="About" mode={mode} toggleMode={toggleMode}></Navbar>
     <Alert alert={alert}></Alert>
     <div className="container my-3">
         <Routes>
              <Route path="/about" element={<About mode={mode}/>}>
               
              </Route>
              <Route path="/" element={<TextForm showAlertMessage={showAlertMessage} heading="Enter The Text To Analyze Below" mode={mode} ></TextForm>} >
             </Route>
        </Routes>
        </div>
      </Router>
     </>
   
   );
 
}
export default App;
