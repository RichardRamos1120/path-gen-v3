import React from 'react';
import {Link} from "react-router-dom";
import {useState} from "react";


//custom hooks
import {useSignup} from "../../hooks/useSignup";

function Signup() {

    const {signup} = useSignup();

    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    console.log(fullName,email,password)
    const handleSubmit = (e) =>{
        e.preventDefault();
        signup(email,password,fullName)
        setFullName("");
        setEmail("");
        setPassword("");

    }
    
    return (
        <div className="login-signup">
            <img className="login-signup-bg" src="/img/bg.svg" alt="background"/>
            <form className="login-signup-form" onSubmit={handleSubmit}>

                <img src="/img/world.svg" alt="world"/>

                <img className="login-signup-form-logo" src="/img/logo.svg" alt="logo"/>

                <label className="login-signup-form-label">
                    <span>Full Name</span>
                    <input 
                    type="text" 
                    placeholder="Enter your name" 
                    onChange={(e)=>setFullName(e.target.value)}
                    value={fullName}
                    />
                </label>

                <label className="login-signup-form-label">
                    <span>Email</span>
                    <input 
                    type="email" 
                    placeholder="Enter your name Email here"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    />
                </label>

                <label className="login-signup-form-label">
                    <span>Password</span>
                    <input 
                    type="password" 
                    placeholder="Enter your Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    />
                </label>

                <div className="login-signup-btn-action">
                    <button className="btn">Create Account</button>
                    <span><Link to="/login" style={{textDecoration:'none'}}>Already have an account? <em>Log in.</em></Link></span>
                </div>
            </form>
        </div>
    );
}

export default Signup;