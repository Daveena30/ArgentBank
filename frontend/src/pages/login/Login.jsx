import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/profile');
    };


    return (
        <main className="login bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>

                    <div class="input-wrapper">
                    <label for="email">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        
                    </div>

                    <div class="input-wrapper">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                    </div>

                    <div className='form-check'>
                        <input
                            type="checkbox"
                            checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />

                       
                        <label>Remember Me</label>
                    </div>
                    <button type="submit" class="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Login;

