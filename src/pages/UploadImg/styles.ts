import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    gap: 50px;
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
    font-size: 30px;
}

`

export const Button = styled.button`
    background: #3b8d61;
    color: #fff;
    border: 0;
    padding: 15px 60px;
    cursor: pointer;
    border-radius: 15px;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#3b8d61')};
    }
`;

export const UploadedImage = styled.img`
    width: 100%;
    margin-top: 15px;

`;