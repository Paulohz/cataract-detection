import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`;

export const Content = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
`;

export const ModalHeader= styled.div`
    padding: 2px 16px;
    background-color: var(--color-dark-green);;
    color: white;

`;

export const ModalBody= styled.div`
    padding: 2px 16px;
`;

 export const ModalFooter= styled.div`
    padding: 2px 16px;
    background-color: var(--color-dark-green);;
    color: #fff;
`;


 export const Close = styled.div`
    color: #fff;
    float: right;
    font-size: 28px;
    font-weight: bold;


    &:hover, &:focus{
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
 `;