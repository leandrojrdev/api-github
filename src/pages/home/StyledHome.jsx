import styled from "styled-components";

export const HomeStyle = styled.div`
  flex-direction: column;

  .form {
    width: 350px;
    border: 1px solid black;
    margin-top: 50px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 1px 5px black;

    input {
      margin-top: 10px;
      width: 90%;
      height: 25px;
      border: 1px solid black;
      border-radius: 5px;
    }

    button {
      margin-top: 10px;
      height: 30px;
      width: 30%;
      background-color: #030355;
      color: white;
      border-radius: 10px;
    }
  }

  .error{
    color: red;
    margin-top: 10px;
    font-size: 1.1em;
  }

  .userCard {
    width: 340px;
    border: 1px solid black;
    margin-top: 5px;
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px black;
    display: flex;
    flex-direction: column;

    div{
        width: 100%;
        display: flex;

        p{
            font-weight: bold;
        }

        span{
            margin-left: 5px;
        }
    }
  }
`;
