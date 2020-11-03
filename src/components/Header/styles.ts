import styled from 'styled-components';

export const Container = styled.div`
    width: 100%; 
    text-align: center;
    margin-bottom: 50px;
`

export const LinkContainer = styled.div`
    background: var(--color-dark-green);
    padding: 30px;
    text-align: center; 
    display:flex;
    justify-content: center;

    a{
        text-decoration: none;
        padding: 0 40px;
        color: var(--color-light-green);
        font-weight: bold;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column; 
    }
`

export const Title = styled.div`
    color: var(--color-dark-green);
    font-weight: bold;
    font-size: 50px;
    margin-top: 30px;

    @media only screen and (max-width: 600px) {
        font-size: 30px;
    }
`