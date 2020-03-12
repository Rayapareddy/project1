import React from 'react';
import data from './data.json';
import icon from './super.svg';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import Resume from './Resume';

let Profile=()=>{
    const profiles=data.profiles;
   
    return(
        <div className="parent">
            <BrowserRouter>
                <Route exact path="/resume" component={Resume}></Route>
            </BrowserRouter>
            {profiles.map((i,j)=>(
                <div className="child" key={j}>
                    <img src={icon} alt="profile" />
                    <h2> {i.basics.name}  <hr></hr></h2>
                    <a href={"mailto:"+i.basics.email} className="link">{i.basics.email}</a> <br></br>

                    <a href={"tel:"+i.basics.mobile} className="mobile">{i.basics.mobile}</a> <hr></hr>
                    <Link to={{pathname:"/resume",index:{value:{j}}}}className="btn"> VIEW PROFILE </Link>

                </div>
            ))}
        </div>
    )
}

export default Profile;