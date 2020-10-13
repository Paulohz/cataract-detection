import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 

`;

export const ContainerUploadImg = styled.div`
    max-width: 1100px;
    padding: 30px;
    border-radius: 20px;
    border-color: var(--color-dark-green);

    color: var(--color-dark-green);
    font-size: 14px;
    font-weight: bold;
    padding: 30px;

    background-color: var(--color-green);
    max-width: 500px;

    div {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}

    h1 {
    color: #fff;
    text-align: center;
    font-size: 50px;;
}

`