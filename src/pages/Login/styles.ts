import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 100vh;
   
  
`
export const Content = styled.div`
    background: #fff;
    padding: 50px;
    border-color: var(--color-dark-green);
    border-radius: 20px;
    `


export const LoginHeader = styled.div`
    text-align: center;
    color: #3b8d61;
    display: flex;
    flex-direction: column;

    strong {
    font-size: 2rem;
}

span {
    width: 100%;
    margin: 50px 0;
}

`

export const LoginFields = styled.div`

& + & {
    margin: 1.4rem 0;
}

label {
    font-size: 1.4rem;
    color: var(--color-dark-green);
}

input {
    width: 100%;
    height: 3.2rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: #fff;
    border: 1px solid var(--color-dark-green);
    outline: 0;
    padding: 0 1.6rem;
}

&:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: var(--color-dark-green);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
}


`

export const LoginLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    a {
    color: var(--color-green);
    text-decoration: none;
    border-bottom: 3px solid var(--color-dark-green);
    font-size: 18px;
    font-weight: bold;
}
`