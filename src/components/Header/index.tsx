import React from 'react';

import { Link } from 'react-router-dom';
import {Container, LinkContainer, Title} from './styles';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <>
            <Container>

                <LinkContainer>
                    <Link to="paulo">Como usar</Link>
                    <Link to="paulo">Sobre o projeto</Link>
                    <Link to="paulo">Termos de uso</Link>
                </LinkContainer>


                <Title>{title}</Title>
            </Container>

        </>

    )
}

export default Header;