import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Btn = styled.button`
  border: 1px solid black;
  border-radius: 7px;
  font-size: 20px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:active {
    background-color: rgb(0, 85, 170);
    color: rgb(255, 255, 255);
  }
`;
