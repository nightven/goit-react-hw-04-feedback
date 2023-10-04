import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
  height: 30px;
  min-width: 60px;

  font-size: 18px;
  text-transform: uppercase;

  color: white;
  cursor: pointer;


  &:first-child {
      background: green;
    }
    &:nth-child(2) {
      background-color: orange;
    }
    &:last-child {
      background-color: red;
    }
    &:hover {
      scale: 1.05;
    }
`;

export const WrapButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
