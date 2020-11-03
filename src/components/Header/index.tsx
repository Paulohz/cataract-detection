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
                    <Link to="/howtouse">Como usar</Link>
                    <Link to="/about">Sobre o projeto</Link>
                    <Link to="/termsofuse">Termos de uso</Link>
                    <Link to="uploadimg">Diagnóstico</Link>
                </LinkContainer>


                <Title>{title}</Title>
            </Container>

        </>

    )
}

export default Header;