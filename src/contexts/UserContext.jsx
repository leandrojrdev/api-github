import { createContext, useState } from "react";

export const UserContext = createContext("Vazio");

export const UserProvider = ({ children }) => {
  const [info, setInfo] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const userInput = () => {
    fetch(`https://api.github.com/users/${user}`)
      .then((resp) => resp.json())
      .then((data) => setInfo(data))
      .catch((error) => setError(error));
    console.log(info);
  };

  const testeFun = () => {
    setUser(user)
    setInfo(info)
  };

  return (
    <UserContext.Provider value={{ user, info, setUser, userInput, error, testeFun }}>
      {children}
    </UserContext.Provider>
  );
};
