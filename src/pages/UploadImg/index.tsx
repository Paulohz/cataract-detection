import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

import filesize from 'filesize';

//import { Link } from 'react-router-dom';
import imgEye from '../../assets/eye.svg';

import Header from '../../components/Header';

import { Container, ContainerUploadImg, Button } from './styles';
//import { useHistory } from 'react-router-dom';
import api from '../../services/api';


interface UploadProps {
    onUpload: Function;
}

interface FileProps {
    file: File;
    name: string;
    readableSize: string;
}

const UploadImg: React.FC<UploadProps> = ({ onUpload }: UploadProps) => {
    const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);

    //const history = useHistory();

    async function handleUpload(): Promise<void> {
        const data = new FormData();
    
        const file = uploadedFiles[0];
    
        data.append('image', file.file);
    
        console.log(uploadedFiles);
        
        try {
          await api.post('/predict', data).then(response => {
                alert(response.data)
            });
    
          //history.push('/');  
        } catch (err) {
          console.log(err);
        }
      }

    function submitFile(files: File[]): void {
        console.log(files);

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
                <ContainerUploadImg className="container-upload-img">

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

                <Button type="button" onClick={handleUpload}>Enviar</Button>
            </Container>


        </>
    );
}

export default UploadImg;