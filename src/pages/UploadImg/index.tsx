import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

import { Link } from 'react-router-dom';
import imgEye from '../../assets/eye.svg';

import Header from '../../components/Header';

import './styles.css';


interface UploadProps {
    onUpload: Function;
}

const UploadImg: React.FC<UploadProps> = ({ onUpload }: UploadProps) => {

    return (
        <>
            <Header title="Diagnóstico de catarata pelo uso de imagem da retina" />
            <div className="container-upload-img">
           
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()}>
                             <img src={imgEye} alt="Lupa" />
                            <input {...getInputProps()} />
                           
                            <h1>Arraste a imagem para diagnóstico(Ou clique)</h1>
                        </div>
                    )}
                </Dropzone>


            </div>

        </>
    );
}

export default UploadImg;