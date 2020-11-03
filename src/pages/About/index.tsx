import React from 'react';
import { Container, Content } from './styles';

import Header from '../../components/Header'


const About: React.FC = () => {

    return (
        <>
            <Header title="Sobre o Projeto" />
            <Container>
                <Content>

                    <p>
                        O nosso projeto consiste em uma aplicação baseada em machine learning para fazer o diagnóstico de catarata. O sistema atualmente é uma ferramenta de auxilio ao profissional que trabalha na área de oftalmologia. A imagem que tem que ser utilizada de input para receber a classificação, tem que ser da retina retiradas através de um biomicroscópio.                        </p>
                    <p>
                        Nos dias atuais doenças oculares são provocados por diversos motivos, sendo eles genéticos ou por estilo de vida, que podem causar dificuldades na visão e até mesmo a cegueira. O último Censo Demográfico (IBGE 2010) identificou mais de 35 milhões de pessoas com a algum grau de dificuldade visual, uma delas é catarata. Este artigo tem como objetivo apresentar as técnicas de desenvolvimento de uma ferramenta capaz de realizar o diagnóstico desta doença de forma automática através de imagens da retina. Para isto, serão discutidos temas como machine learning e processamento de imagens pode ser aplicado nesta tarefa. A contribuição obtida como resultado final foi a automatização deste procedimento através do desenvolvimento de uma aplicação WEB capaz de utilizar um modelo preditivo para realizar diagnósticos,  facilitando e agilizando os resultados com maior precisão, auxiliando o doutor responsável.
                    </p>
                    <p>
                        O sistema  é open source e está disponível em repositório público no GitHub, ou seja, qualquer um pode ver como e o que acontece em todas as partes da aplicação.
                    </p>
                </Content>

            </Container>

        </>
    );
};

export default About;