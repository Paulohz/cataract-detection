import React from 'react';

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
                <button>Entrar</button>    
                <div className="login-links">
                    <a href="#">Esqueci minha senha</a>
                    <a href="#">Solicitar acesso</a>
                </div>
            </div>
            
        </div>
    );
};

export default Login;