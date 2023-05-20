
import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import InputForm from './components/InputForm';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
   let [theme, setTheme]=useState("light");
   let [alert,setAlert]=useState(null);
   const setA=(message,type)=>{
     setAlert({
       Message:message,
       Type: type
     })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
   }

   const toggleTheme=()=>{
    if(theme==="light"){
      setTheme('dark')
      document.body.style.backgroundColor = '#042743';
      setA("Theme Changed to dark mode","success")
    }
    else{
      setTheme('light')
      document.body.style.backgroundColor = 'white';
      setA("Theme Changed to Light mode","success");
    }
   }
   
  return (
    <Router>
    <div className="App" >
     <NavBar title='TextUtils' theme={theme} toggleTheme={toggleTheme}/>
     <Alerts alert={alert}/>
     <Routes>
          <Route path="/about" >
            
          </Route>
         
          <Route path="/" element={<div className='container'>
         <InputForm theme={theme} setA={setA}/>
          </div>}>
          
          </Route>
        </Routes>
     
    </div>
    </Router>
  );
}

export default App;
