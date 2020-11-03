import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Content, Accept, ButtonContainer } from './styles';


const Terms: React.FC = () => {
    let history = useHistory();



    const checkIfTrue = localStorage.getItem('@CataractDetection/checked') === 'true' ? true : false;

    const [checked, setChecked] = useState(checkIfTrue);
    

    function verifyButtonState() {
        if (checked === false) {
            alert("Favor verificar confirmação do termo de uso.");
        } else {
            history.push("/uploadimg");
        }
    }

    const handleCheck = () => {
        if (!checked) {
            setChecked(true);
            localStorage.setItem('@CataractDetection/checked', 'true');
        } else {
            setChecked(false);
            localStorage.setItem('@CataractDetection/checked', 'false');
        }

    }

    return (
        <Container>
            <Content>
                <p>1. A utilização da imagem será permitida para fins institucionais, acadêmicos, educacionais, informativos.</p>

                <p>2. O AUTORIZADO poderá praticar os seguintes atos relacionados com a imagem ou nome do(a) CONCEDENTE: </p>
                <p>a) Editar, reeditar, tratar, modificar, alterar, recortar, compilar, agrupar ou de qualquer modo complementar o conteúdo captado; </p>
                <p>b) Transferir, migrar, deslocar, alterar ou de qualquer forma mudar o formato ou extensão do suporte ao qual o conteúdo tenha sido capturado, seja de        físico para digital, digital para físico ou de digital para digital (mudança de tipo de arquivo digital);</p>
                <p>c) Transmitir o suporte que contenha conteúdo autorizado através de qualquer meio, seja eletrônico, digital, magnético, fibra ótica, ou qualquer outro que venha a ser inventado; </p>
                <p>d) Armazenar, agrupar ou de qualquer forma organizar o suporte em que esteja inserido o conteúdo autorizado, seja em banco de dados, servidores internos, externos, de maneira íntegra ou fracionada; </p>

                <p>3. Declara o AUTORIZADO que estão ressalvados os direitos do(a) CONCEDENTE sobre a integridade da sua honra, boa fama ou a respeitabilidade, sendo vedada a utilização da imagem ou nome deste para fins comerciais ou publicitários. </p>

                <p>4. O(A) CONCEDENTE declara que exime o AUTORIZADO de qualquer responsabilidade pelo uso indevido de sua imagem ou nome por terceiros.</p>

                <p>5. O presente contrato será regido pelas leis brasileiras, ficando eleito o Foro da Comarca de São Paulo, Capital, com expressa renúncia de qualquer outro, por mais privilegiado que seja, para dirimir qualquer dúvida, pendência ou litígio oriundo deste contrato.</p>

                <p>6. Estou ciente que o diagnostico realizado pelo site não substitui o diagnostico realizado pelo profissional da área da saúde.</p>

                <p>7. Após o diagnóstico todas as imagens serão definitivamente apagadas, ficando rescindido o presente instrumento.</p>

                <p>8. O presente contrato vigorará por tempo indeterminado ou durante o período em que o SITE estiver disponibilizando seus serviços via internet.</p>

                <Accept>
                    <input type="checkbox" checked={checked} onClick={() => { handleCheck() }} onChange={() => { }} />
                    <span>Concordo com todos termos e estou ciente que o diagnóstico realizado pelo site não substitui o diagnóstico realizado pelo profissional da área da saúde.</span>
                </Accept>

                <ButtonContainer>
                    <button type="button" onClick={() => { verifyButtonState() }}>Enviar</button>
                </ButtonContainer>
            </Content>

        </Container>

    );
};

export default Terms;