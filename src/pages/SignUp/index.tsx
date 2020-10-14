import React from 'react';
import { Link } from 'react-router-dom'

import { Container, Content, LoginHeader, LoginFields, ButtonContainer } from './styles';

const SignUp: React.FC = () => {
   // let history = useHistory();



    const handleSubmit = () => {
        console.log('oi');
    }


    return (
        <Container>
            <Content>
                <LoginHeader>
                    <strong>Cataract Detection</strong>
                    <span>Solicitar acesso</span>
                </LoginHeader>

                <LoginFields>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                </LoginFields>

                <LoginFields>
                    <label htmlFor="justify">Justificativa</label>
                    <input type="text" id="justify" />
                </LoginFields>


                <ButtonContainer>
                    <button onClick={() => handleSubmit()} type="button">Enviar</button>
                    <Link to="/"><button type="button">Voltar</button></Link>

                </ButtonContainer>

            </Content>

        </Container>
    );
};

export default SignUp;