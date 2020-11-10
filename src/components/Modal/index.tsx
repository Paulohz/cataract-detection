import React, {useState} from 'react';

import Gauge from '../Gauge'
import { Container, Content, ModalHeader, ModalBody, Close, UploadedImage } from './styles';

interface ModalProps {
    isOpenend: boolean;
    precision: number;
    result: string;
    imageLink: string
}


const Modal: React.FC<ModalProps> = ({ isOpenend, precision, result, imageLink, children }) => {

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
                            <h2>Resultado da predição</h2>
                        </ModalHeader>
                        <ModalBody>                        
                            <Gauge value={precision} result={result}/>      

                             <UploadedImage src={imageLink} alt="Imagem de upload" />                              
                        </ModalBody>    

                        
                    </Content>
                    {children}
                </Container>
            }
        </>

    );
}

export default Modal;