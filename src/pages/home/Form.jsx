import React from "react";
import styled from "styled-components";

export default function Form({ userInput, setUser }) {
  return (
    <FormStyled>
      <label htmlFor="user">Username</label>
      <input
        name="name"
        onChange={(e) => setUser(e.target.value)}
        type="text"
        placeholder="Enter a username"
      ></input>
      <button type="prev" onClick={userInput}>
        Search
      </button>
    </FormStyled>
  );
}

const FormStyled = styled.div`
  border: 1px solid #21262d;
  border-radius: 6px;
  padding: 16px;
  font-size: 14px;
  width: 320px;
  background-color: #161b22;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  label {
    margin-left: 3px;
    margin-bottom: 4px;
    color: white;
    font-weight: 400;
    font-size: 14px;
  }

  input {
    margin-top: 4px;
    margin-bottom: 16px;
    padding: 5px 12px;
    border: 1px solid #30363d;
    background-color: #0d1117;
    border-radius: 6px;
    font-size: 14px;
    line-height: 20px;
    color: #c9d1d9;
  }

  button {
    background-color: #238636;
    width: 100%;
    margin-top: 5px;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid #161b22;
    border-radius: 6px;
    font-family: inherit;
    color: white;
  }
`;
