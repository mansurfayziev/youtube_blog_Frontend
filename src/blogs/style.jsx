import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  .blog {
    height: 320px;
    width: 430px;
    background: #1e1e1e;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 5px;
    overflow: hidden;
    iframe {
      height: 250px;
      width: 100%;
      outline: none;
      border: none;
      border-radius: 10px;
      margin: 5px 0;
    }
  }
  .lake {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
  }
`;
