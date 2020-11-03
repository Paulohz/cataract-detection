import styled from 'styled-components';

interface GaugeFillProps {
  value: number;
}

export const Container = styled.div`
  width: 100%;
  max-width: 250px;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  color: #004033;
  `;

export const GaugeBody = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  background: #b4c0be;
  position: relative;
  border-top-left-radius: 100% 200%;
  border-top-right-radius: 100% 200%;
  overflow: hidden;
  `;

export const GaugeFill = styled.div<GaugeFillProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: inherit;
  height: 100%;
  background: #009578;
  transform-origin: center top;
  transition: transform 0.2s ease-out;

  transform: rotate(${props => props.value / 2}turn);

  `;

export const GaugeCover= styled.div`
  width: 75%;
  height: 150%;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);

  /* Text */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25%;
  box-sizing: border-box;
  `;