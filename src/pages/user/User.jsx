import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import styled, { keyframes } from "styled-components";

export default function User() {
  const { id } = useParams();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}/repos`)
      .then((resp) => resp.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <UserStyled>
      <div className="projects">
        <h1>Repositories:</h1>
        <div className="mapeamento flex-class">
          {projects.map((x) => (
            <div className="repositorio flex-class">
              <div className="title flex-class">
                <a href={x.url} target="_blank">
                  {x.name}
                </a>
                <div>{x.private ? "Private" : "Public"}</div>
              </div>

              <div className="description">
                <span>{x.description}</span>
              </div>

              <div className="language">
                {x.language === "JavaScript" ? (
                  <>
                    <div className="js-icon"></div>
                    <span>{x.language}</span>
                  </>
                ) : x.language === "HTML" ? (
                  <>
                    <div className="html-icon"></div>
                    <span>{x.language}</span>
                  </>
                ) : x.language === "CSS" ? (
                  <>
                    <div className="css-icon"></div>
                    <span>{x.language}</span>
                  </>
                ) : x.language === "TypeScript" ? (
                  <>
                    <div className="ts-icon"></div>
                    <span>{x.language}</span>
                  </>
                ) : (
                  <>
                    <div className="default-icon"></div>
                    <span>{x.language}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </UserStyled>
  );
}


const reposAnim = keyframes`
    0%{
        margin-top: 150px;
        opacity: 0;
    }
    100%{
        opacity: 1;
        margin-top: 15px;

    }
`;

const UserStyled = styled.div`
  color: #c9d1d9;

  .projects {
    width: 80%;
    margin: 50px auto;
    padding: 10px 15px;

    h1 {
      margin: 0;
      margin-left: 20px;
      font-weight: 500;
      font-size: 30px;
      margin-bottom: 15px;
    }

    .mapeamento {
      margin-left: 10px;
      width: 100%;
      justify-content: flex-start;
      flex-wrap: wrap;

      .repositorio {
        animation: ${reposAnim};
        animation-fill-mode: forwards;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;

        flex-direction: column;
        width: 30%;
        padding: 10px 15px;
        height: 130px;
        margin: 8px;
        border-radius: 6px;
        border: 1px solid #30363d;
        align-items: flex-start;
        justify-content: flex-start;

        .title {
          width: 100%;
          justify-content: space-between;

          a {
            color: #58a6ff;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }

          div {
            border: 1px solid #30363d;
            padding: 3px 10px;
            border-radius: 40px;
            font-size: 13px;
          }
        }

        .description {
          color: #8b949e;
          font-size: 15px;
          margin-top: 8px;

          span {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        }

        .language {
          height: 100%;
          display: flex;
          justify-content: flex-start;
          width: 100%;

          div {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            margin-right: 6px;
            align-self: flex-end;
            margin-bottom: 1px;
          }

          span {
            align-self: flex-end;
          }
        }
      }
    }
  }
`;
