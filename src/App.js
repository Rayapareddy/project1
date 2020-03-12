import React from 'react';
import './App.css';
import Profile from './Profile';
import {BrowserRouter,Route} from 'react-router-dom';
import Resume from './Resume';


let App=()=>{
 return(
  <BrowserRouter>
    <Route exact path="/" component={Profile}/>
    <Route exact path="/resume" component={Resume}/>
  </BrowserRouter>
  
  )
}

export default App;