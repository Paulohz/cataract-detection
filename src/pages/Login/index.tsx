import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

function Login() {
    return (
        <div className="container">
            <div className="login-header">
                <strong>Cataract Detection</strong>
                <span>Fazer login</span>
            </div>

            <div className="login-fields">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
            </div>

            <div className="login-fields">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
            </div>

            <div>
                <button type="button" onClick={}>Entrar</button>    
                <div className="login-links">
                    <Link to="#">Esqueci minha senha</Link>
                    <Link to="#">Solicitar acesso</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Login;