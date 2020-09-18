import React from 'react';

import './styles.css';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <>
            <div className="header">

                <div className="links">
                    <a href="paulo">Como usar</a>
                    <a href="paulo">Sobre o projeto</a>
                    <a href="paulo">Termos de uso</a>
                </div>


                <div className="title">{title}</div>
            </div>

        </>

    )
}

export default Header;