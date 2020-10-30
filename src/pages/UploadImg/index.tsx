import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import filesize from 'filesize';

import api from '../../services/api';

import Header from '../../components/Header';
import Modal from '../../components/Modal';

import { Container, ContainerUploadImg, Button } from './styles';


import imgEye from '../../assets/eye.svg';

interface UploadProps {
    onUpload: Function;
}

interface FileProps {
    file: File;
    name: string;
    readableSize: string;
}

interface ModalProps {
    chanceNormal: number;
    classe: string;
}


const UploadImg: React.FC<UploadProps> = () => {
    const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);

    const [result, setResult] = useState(0);
    const [eyeClass, setEyeClass] = useState('');

    async function handleUpload(): Promise<void> {

        const data = new FormData();
        const file = uploadedFiles[0];

        setVisible(false);

        data.append('image', file.file);

        try {
            await api.post<ModalProps>('/predict', data).then(response => {
                setOpen(true);
                const diagnosis = response.data;

                setResult(diagnosis.chanceNormal);
                setEyeClass(diagnosis.classe);

            });

        } catch (err) {
            console.log(err);
        }
    }

    function submitFile(files: File[]): void {
        setOpen(false);

        const uploadFiles = files.map(file => ({
            file,
            name: file.name,
            readableSize: filesize(file.size),
        }));

        setUploadedFiles(uploadFiles);
        setVisible(true);
    }

    return (
        <>

            <Header title="Diagnóstico de catarata pelo uso de imagem da retina" />
            <Container>
                <ContainerUploadImg>

                    <Dropzone onDrop={acceptedFiles => submitFile(acceptedFiles)}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps()}>
                                <img src={imgEye} alt="Lupa" />
                                <input {...getInputProps()} />

                                <h1>Arraste a imagem para diagnóstico(Ou clique)</h1>
                            </div>
                        )}
                    </Dropzone>


                </ContainerUploadImg>

                {visible === true &&
                    <Button type="button" onClick={handleUpload}>Enviar</Button>
                }

            </Container>

            {
                open === true && <Modal isOpenend={open} precision={result} result={eyeClass} />
            }





        </>
    );
}

export default UploadImg;