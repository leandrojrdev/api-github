import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaUserFriends } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

export default function UserInfo({ info }) {
  return (
    <UserStyle>
      {info === "" ? (
        <></>
      ) : (
        <>
          {info.message === "Not Found" ? (
            <p className="error">Usuário não encontrado!</p>
          ) : (
            <div className="userCard flex-class">
              <img src={info.avatar_url} alt=""></img>
              <div className="username">
                <h1>{info.name}</h1>
                <span>{info.login}</span>
              </div>

              <a className="flex-class" href={info.html_url} target="_blank">
                <button>Follow</button>
              </a>
              <div className="otherInfos flex-class">
                <span className="bio">{info.bio}</span>
                <span className="follow flex-class">
                  <FaUserFriends id="svgFollow" /> {info.followers} followers ·{" "}
                  {info.following} following
                </span>
                <span className="location flex-class">
                  <HiLocationMarker id="svgLocation" />
                  {info.location}
                </span>
              </div>

              <Link className="userAncor" to={`user/${info.login}`}>
                Acesse os repositórios deste usuário.
              </Link>
            </div>
          )}
        </>
      )}
    </UserStyle>
  );
}

const entryAnimation = keyframes`
    0%{
        margin-top: 150px;
        opacity: 0;
    }
    100%{
        opacity: 1;
        margin-top: 15px;

    }
`;

const errorAnimation = keyframes`
    0%{
        opacity: 0;
        display: none;

    }
    20%{
        opacity: 1;
        display: block;
    }
    80%{
        opacity: 1;
        display: block;
    }
    100%{
        opacity: 0;
    }
`;

const UserStyle = styled.div`
  .error {
    color: red;
    font-weight: 400;
    animation: ${errorAnimation};
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-duration: 5s;
  }

  .userCard {
    width: 320px;
    padding: 20px 15px;
    border-radius: 6px;
    background-color: #161b22;
    border: 1px solid #21262d;
    color: #c9d1d9;
    flex-direction: column;
    justify-content: center;

    animation-name: ${entryAnimation};
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-duration: 1s;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: 10px 0 35px 0;
    }

    .username {
      width: 95%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        margin: 0;
        font-weight: 500;
        font-size: 1.2em;
      }
    }

    a {
      width: 100%;
      margin-top: 10px;
      text-decoration: none;

      button {
        color: #c9d1d9;
        background-color: #21262d;
        width: 96%;
        padding: 5px 16px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        border: 1px solid rgba(240, 246, 252, 0.1);
        border-radius: 6px;
      }
    }

    .otherInfos {
      width: 95%;
      margin-top: 15px;
      flex-direction: column;
      align-items: flex-start;

      .follow {
        margin-top: 8px;

        #svgFollow {
          margin-right: 5px;
        }
      }

      .location {
        #svgLocation {
          margin-right: 5px;
        }
      }
    }

    .userAncor {
      color: #c9d1d9;
      text-decoration: underline;
      width: 95%;
    }
  }
`;
