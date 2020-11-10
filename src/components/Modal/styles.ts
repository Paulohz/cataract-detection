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
  width: 30%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ModalHeader = styled.div`
    padding: 2px 16px;
    background-color: var(--color-dark-green);;
    color: white;
    text-align: center;

`;

export const ModalBody = styled.div`
    margin: 30px 0;
    padding: 2px 16px;

    text-align: center;
    gap: 26px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const ModalFooter = styled.div`
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


export const UploadedImage = styled.img`

    width: 90%;
    margin-top: 15px;

`;