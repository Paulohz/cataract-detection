import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
    justify-content: center;
    align-items: center; 

`;

export const Content = styled.div`
    max-width: 1200px;
    background-color: #fff;
    color: var(--color-dark-green);
    font-size: 14px;
    font-weight: bold;
    padding: 30px;

    img {
      width: 50%;
      
    }

    p {
      padding: 10px 0;
    }

`;
