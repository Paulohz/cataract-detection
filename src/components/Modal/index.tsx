import React from 'react';

import { Container, Content, ModalHeader, ModalBody, ModalFooter, Close } from './styles';

interface ModalProps {
    isOpenend: boolean;
    precision: number;
    result: string; 
}


const Modal: React.FC<ModalProps> = ({ isOpenend, precision, result, children }) => {

    const handleClose = () => {
        isOpenend = false;
    }

    return (
        <>
            {isOpenend === true &&
                <Container>
                    <Content>
                        <ModalHeader>
                            <Close onClick={() => (handleClose())}>&times;</Close>
                            <h2>Diagnóstico</h2>
                        </ModalHeader>
                        <ModalBody>
                            <p>Resultado: </p>
                            <p>{result}</p>
                        </ModalBody>
                        <ModalFooter>
                            <h3>Precisão do diagnótico: {precision} </h3>
                        </ModalFooter>
                    </Content>
                    {children}
                </Container>
            }
        </>

    );
}

export default Modal;