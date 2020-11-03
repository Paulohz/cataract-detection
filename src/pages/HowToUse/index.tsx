import React from 'react';

import { Container, Content } from './styles';
import Header from '../../components/Header'

import Example from '../../assets/exemploImg.png';

const HowToUse: React.FC = () => {

    return (
        <>
        <Header title="Como usar" />
            <Container>
                <Content>
                    <p>Para usar basta inserir uma imagem e clicar me enviar para ter o diagnóstico</p>
                    <img src={Example} alt="exemplo"/>
                    <p>Depois de enviar a imagem irá aparecer o diagnóstico</p>
                </Content>

            </Container>

        </>
    );
};

export default HowToUse;