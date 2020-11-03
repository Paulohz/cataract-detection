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
    chanceCatarata: number;
    chanceNormal: number;
    classe: string;
    confianca: number;
    open: boolean;
}


const UploadImg: React.FC<UploadProps> = () => {
    const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);

    const [diagnosis, setDiagnosis] = useState<ModalProps>();
    const [loading, setLoading] = useState(false);

    async function handleUpload(): Promise<void> {
        setLoading(true);
        const data = new FormData();
        const file = uploadedFiles[0];

        const temp = [...uploadedFiles];
        temp.shift();
        setUploadedFiles(temp)

        data.append('image', file.file);

        try {

            await api.post<ModalProps>('/predict', data).then(response => {
                const diagnosis = response.data;
                setDiagnosis({
                    chanceCatarata: diagnosis.chanceCatarata,
                    chanceNormal: diagnosis.chanceNormal,
                    classe: diagnosis.classe,
                    open: true,
                    confianca: diagnosis.classe === 'normal' ? diagnosis.chanceNormal : diagnosis.chanceCatarata
                });
            });

        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }

    function submitFile(files: File[]): void {

        setDiagnosis({
            chanceCatarata: 0,
            chanceNormal: 0,
            confianca: 0,
            classe: '',
            open: false
        })

        const uploadFiles = files.map(file => ({
            file,
            name: file.name,
            readableSize: filesize(file.size),
        }));

        setUploadedFiles(uploadFiles);
    }

    return (
        <>

            <Header title="Diagnóstico de catarata pelo uso de imagem da retina" />
            <Container>
                <ContainerUploadImg>

                    <Dropzone accept={'.png'} onDrop={acceptedFiles => submitFile(acceptedFiles)}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps()}>
                                <img src={imgEye} alt="Lupa" />
                                <input {...getInputProps()} />

                                <h1>Arraste a imagem para diagnóstico(Ou clique)</h1>
                            </div>
                        )}
                    </Dropzone>


                </ContainerUploadImg>

                {

                    uploadedFiles.length > 0 && <Button type="button" onClick={handleUpload}>Enviar</Button>
                }
                {loading && (
                    <i
                        className="fa fa-refresh fa-spin"
                        style={{ color: "var(--color-dark-green)" }}
                    />
                )}

            </Container>

            {
                diagnosis?.open && <Modal isOpenend={diagnosis.open} precision={diagnosis.confianca} result={diagnosis.classe} />
            }

        </>
    );
}

export default UploadImg;