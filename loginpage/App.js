import React,{useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Registartion from './Miniprogect1/Registartion';
import Login from './Miniprogect1/Login';

function App() {
  const [currentForm, setCurrentForm]=useState('login');

 const  mainForm=(form)=>{
    setCurrentForm(form);
  }
  return (
    
    <div className="App">
      {currentForm === 'login'?  <Login onFormSwitch={mainForm}/>:   <Registartion onFormSwitch={mainForm}/>}
    
     
    </div>
  
  );
}

export default App;
