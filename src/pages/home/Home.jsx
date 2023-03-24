import React, { useContext } from "react";
import { HomeStyle } from "./StyledHome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function Home() {
  const { info, setUser, userInput, error, testeFun } = useContext(UserContext);

  return (
    <HomeStyle className="flex-class">
      <div className="form">
        <h3>Busque um usuário</h3>
        <input
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="Insira um usuário"
        ></input>
        <button type="prev" onClick={userInput}>
          Buscar
        </button>
      </div>

      {info === "" ? (
        <></>
      ) : (
        <>
          {info.message === "Not Found" ? (
            <p className="error">Usuário não encontrado!</p>
          ) : (
            <div className="userCard">
              <div>
                <p>Nome: </p>
                <span>{info.name}</span>
              </div>

              <div>
                <p>Endereço: </p>
                <span>{info.location}</span>
              </div>

              <div>
                <p>Bio: </p>
                <span>{info.bio}</span>
              </div>

              <div>
                <p>Repositórios públicos: </p>
                <span>{info.public_repos}</span>
              </div>

              <Link onClick={testeFun} to={`user/${info.login}`}>
                Acesse os repositórios deste usuário.
              </Link>
            </div>
          )}
        </>
      )}
    </HomeStyle>
  );
}
