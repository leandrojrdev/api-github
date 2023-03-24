import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import Form from "./Form";
import styled from "styled-components";

import logo from "../../images/logo-github.png";
import User from "./User";

export default function Home() {
  const { info, setUser, userInput } = useContext(UserContext);

  return (
    <HomeStyle className="flex-class">
      <img alt="" src={logo}></img>
      <h1>Search an Username</h1>
      <Form userInput={userInput} setUser={setUser} s />
      <User info={info} />
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  flex-direction: column;

  img {
    height: 48px;
    width: 48px;
    margin-top: 32px;
    margin-bottom: 24px;
  }

  h1 {
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 16px;
    font-weight: 300;
    color: #f0f6fc;
  }
`;
