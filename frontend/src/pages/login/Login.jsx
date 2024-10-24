import React from "react";

import "./login.css";

const Login = () => {

    const [password, setPassword] = ('')
    const [username, setUsername] = ('')
    return (
        <main className="login bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h2>Sign In</h2>
                <form>

                <div class="input-wrapper">
                        <label for="username">Username</label>
                        <input
                        type="username"
                        id="username"
                        value={username}
                        />
                    </div>

                    <div class="input-wrapper">
                        <label for="password">Password</label>
                        <input
                        type="password"
                        id="password"
                        value={password}
                        />
                    </div>

                    <div className='form-check'>
            <input
             type="checkbox"
             id="rememberMe"
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

