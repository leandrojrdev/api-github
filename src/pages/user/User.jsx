import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import styled from "styled-components";

export default function User() {
  const { id } = useParams();

  const [projects, setProjects] = useState([]);

  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/${id}/repos`)
  //       .then((resp) => resp.json())
  //       .then((data) => setProjects(data));
  //   }, []);

  return (
    <UserStyled>
      <div className="projects">
        <h1>Repositórios:</h1>
        <div className="mapeamento flex-class">
          {projects.map((x) => (
            <div className="repositorio flex-class">
              <div className="first flex-class">
                <a href={x.url} target="_blank">
                  {x.name}
                </a>
                <div>{x.private ? "Private" : "Public"}</div>
              </div>

              <div className="description">
                <p>{x.description}</p>
              </div>

              <div className="language">
                <span>{x.language}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </UserStyled>
  );
}

const UserStyled = styled.div`
  color: #c9d1d9;

  .projects {
    width: 70%;
    border: 1px solid red;
    margin: 50px auto;
    padding: 10px 15px;

    h1 {
      margin: 0;
      font-weight: 500;
      font-size: 30px;
      margin-bottom: 15px;
    }

    .mapeamento {
      width: 100%;
      border: 1px solid blue;
      height: 100px;
      justify-content: flex-start;

      .repositorio {
        flex-direction: column;
        width: 100%;
        height: 80px;
        margin: 10px;
        border-radius: 6px;
        border: 1px solid #30363d;
      }
    }
  }
`;
