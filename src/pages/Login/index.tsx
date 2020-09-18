import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

const Login: React.FC = () => {


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
                <Link to="terms"><button type="button">Entrar</button></Link>
                <div className="login-links">
                    <Link to="#">Esqueci minha senha</Link>
                    <Link to="#">Solicitar acesso</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Login;