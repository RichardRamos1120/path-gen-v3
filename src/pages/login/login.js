import React, {useState} from 'react';
import "./login-signup.css";
import {Link} from "react-router-dom";
import {useLogin} from "../../hooks/useLogin";

function Login(props) {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const {login,isPending,error} = useLogin();


    const handleSubmit = (e) =>{
        e.preventDefault();

        login(email,password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className="login-signup">
            <img className="login-signup-bg" src="/img/bg.svg" alt="background"/>
            <form className="login-signup-form" onSubmit={handleSubmit}>

                <img src="/img/world.svg" alt="world"/>
                <img className="login-signup-form-logo"  src="/img/logo.svg" alt="logo"/>

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
                    <button className="btn">Log in</button>
                    <span><Link to="/signup" style={{textDecoration:'none'}}> Don't have an account? Sign up.</Link></span>
                </div>

                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default Login;