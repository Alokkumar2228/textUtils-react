import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import { useState } from 'react';
import Alert1 from './component/Alert1';
import About from './component/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert1, setAlert1] = useState('');

  const showalert=(message,type)=>{
    setAlert1({
      msg:message,
      type:type, 
    })

    setTimeout(() => {
      setAlert1(null)
    }, 1500);
    
  }


  const toggleMode =()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode enabled","success");

    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showalert("Dark mode disable","success");
    }
  }
  

  return (  
  <> 
  <Router>
{/* <Navbar title="TEXTUTILS" about="About Us" /> */}
<Navbar mode={mode} toggleMode={toggleMode}  />
<Alert1 alert1={alert1} />
{/* container is class of bootstrap */}
<div className="container my-9" > 
        <Switch>
          {/* /user --> Component1
          /user/home -->Component2  
          If you dont use exact then on click any of the user coponent1 will render so thats why we use exact path */}
          
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <Textform heading="Enter the text to analyze..." mode={mode} showalert={showalert}/>
          </Route>
        </Switch>
</div>
  </Router>

  </>
  );
}

export default App;



