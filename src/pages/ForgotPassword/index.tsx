import React from 'react';
import { Link } from 'react-router-dom'

import { Container, Content, LoginHeader, LoginFields, ButtonContainer } from './styles';

const ForgotPassword: React.FC = () => {
    //let history = useHistory();

    const handleSubmit = () => {
        console.log()
    }


    return (
        <Container>
            <Content>
                <LoginHeader>
                    <strong>Cataract Detection</strong>
                    <span>Esqueci a minha senha</span>
                </LoginHeader>

                <LoginFields>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                </LoginFields>

                <ButtonContainer>
                    <button onClick={() => handleSubmit()} type="button">Enviar</button>
                    <Link to="/"><button type="button">Voltar</button></Link>

                </ButtonContainer>

            </Content>

        </Container>
    );
};

export default ForgotPassword;