import React, { useState } from 'react';

import { Container, Content, ModalHeader, ModalBody, ModalFooter, Close } from './styles';

interface ModalProps {
    isOpenend: boolean;
    precision: number;
    result: string;
}


const Modal: React.FC<ModalProps> = ({ isOpenend, precision, result, children }) => {

    const [openModal, setOpenModal] = useState(isOpenend);

    const handleClose = () => {
        setOpenModal(false);
    }


    return (
        <>
            {openModal === true &&
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
                            <h3>Precisão do diagnótico: {Math.round(precision * 100)}% </h3>
                        </ModalFooter>
                    </Content>
                    {children}
                </Container>
            }
        </>

    );
}

export default Modal;