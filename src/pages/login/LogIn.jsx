import React from 'react';
import { useState } from "react";
import './LogIn.css';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';




export default function LogIn() {

    const [action, setAction] = useState("Sign Up");

 



  return (
    <div className="login-container">
        <div className="login">
            <div className="login-title">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="login-inputs">
            {action==="Log In"?<div></div>:<div className="login-input">
                <PersonIcon className="input-img" />
                <input type="text" placeholder="Username"></input>
            </div>}
            
            <div className="login-input">
                <EmailIcon className="input-img" />
                <input type="email" placeholder="Email"></input>
            </div>
            <div className="login-input">
                <LockIcon className="input-img" />
                <input type="password" placeholder="Password"></input>
            </div>
        </div>

        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot your username or password? <span className="click-here">Click Here!</span></div>
}
        

        <div className="submit-container">
            <div className={action==="Log In"?"submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Log In</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        </div>
   </div>
  )
}
