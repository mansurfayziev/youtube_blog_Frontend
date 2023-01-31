import styled from "styled-components";

export const Block = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  scroll-behavior: smooth;
  color: #fff;
  background: #000;
  overflow: scroll;
  &::-webkit-scrollbar {
    height: 0;
    width: 7px;
    background: #4e4e4e;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: greenyellow;
  }
`;

export const Button = styled.button`
  outline: none;
  border: 1px solid greenyellow;
  background: #2e2e2e;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  color: greenyellow;
  font-weight: bold;
  width: 100%;
  margin: 10px 0;
  font-size: 20px;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid greenyellow;
  background: #2e2e2e;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  width: 100%;
  height: 45px;
  color: greenyellow;
  margin: 10px 0;
  font-weight: bold;
`;
