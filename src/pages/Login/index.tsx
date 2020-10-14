import React from 'react';
import { Link, useHistory } from 'react-router-dom'

import { Container, Content, LoginHeader, LoginFields, LoginLinks } from './styles';

const Login: React.FC = () => {
    let history = useHistory();

    const checkIfTrue = localStorage.getItem('@CataractDetection/checked') === 'true' ? true : false;



    const handleSubmit = () => {
        if (checkIfTrue) {
            history.push("/uploadimg");
        } else {
            history.push("/terms");
        }
    }


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
                    <input type="password" id="password" />
                </LoginFields>

                <div>
                    <button onClick={() => handleSubmit()} type="button">Entrar</button>
                    <LoginLinks className="login-links">
                        <Link to="/forgotpassword">Esqueci minha senha</Link>
                        <Link to="/signup">Solicitar acesso</Link>
                    </LoginLinks>
                </div>

            </Content>

        </Container>
    );
};

export default Login;