import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";

import { useParams } from "react-router-dom";
import { UserStyled } from "./StyledUser";

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
      {projects.map((x) => (
        <div>{x.name}</div>
      ))}
    </UserStyled>
  );
}
