import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;

export const Title = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
margin-top: 200px;
/* identical to box height */


color: #676767;
`;

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 10px;

width: 80%;
height: 200px;

background: #FFFFFF;
box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;

export const CardContainer = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px;
gap: 20px;
margin: 0 auto;
width: 1000px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`