import { createContext, useState } from "react";

export const UserContext = createContext("Vazio");

export const UserProvider = ({ children }) => {
  const [info, setInfo] = useState("");
  const [user, setUser] = useState("");

  const userInput = () => {
    setInfo("")
    fetch(`https://api.github.com/users/${user}`)
      .then((resp) => resp.json())
      .then((data) => setInfo(data))
    console.log(info);


    if (info.message === 'Not Found'){
        setInfo("")
    }
  };


  return (
    <UserContext.Provider value={{ user, info, setUser, userInput }}>
      {children}
    </UserContext.Provider>
  );
};
