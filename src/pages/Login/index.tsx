import React from 'react';
import { Link } from 'react-router-dom'

import { Container, Content, LoginHeader, LoginFields, LoginLinks } from './styles';

const Login: React.FC = () => {


    return (
        <Container>
            <Content>
                <LoginHeader>
                    <strong>Cataract Detection</strong>
                    <span>Fazer login</span>
                </LoginHeader>

                <LoginFields>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                </LoginFields>

                <LoginFields>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" />
                </LoginFields>

                <div>
                    <Link to="terms"><button type="button">Entrar</button></Link>
                    <LoginLinks className="login-links">
                        <Link to="#">Esqueci minha senha</Link>
                        <Link to="#">Solicitar acesso</Link>
                    </LoginLinks>
                </div>

            </Content>

        </Container>
    );
};

export default Login;