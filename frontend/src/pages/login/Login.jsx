import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions';
import "./login.css";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    /*const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);*/
    const error = useSelector((state) => state.auth.error);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // Initialisation de `rememberMe`


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await dispatch(login({ email, password, rememberMe }));

        if (response.meta.requestStatus === 'fulfilled') {
            navigate('/profile'); // Redirection vers la page profil en cas de succès
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <main className="login bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div>

                    <button type="submit" className="sign-in-button">Sign In</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </section>
        </main>
    );
};

export default Login;
