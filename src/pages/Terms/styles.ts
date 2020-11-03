import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    margin-top: 50px;
	  justify-content: center;
	  align-items: center;
`;

export const Content = styled.div`
    flex: 1;
    max-width: 1200px;
    background-color: #fff;
    color: var(--color-dark-green);
    font-size: 14px;
    font-weight: bold;
    padding: 30px;

    p {
    padding: 10px 0;
}

`;

export const Accept = styled.div`
  font-size: 18px;
  margin: 10px 0;

  input {
    margin-right: 10px;
  }

`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`