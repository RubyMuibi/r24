import { getUserToken } from "@api/users";

import { AuthContext } from "@contexts/AuthContext";

import { useState, useEffect, createContext, useContext } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const { jwt } = useContext(AuthContext);

  const [user, setUser] = useState("");

  useEffect(() => {
    const getUserTokenHandler = async () => {
      const r24Token = localStorage.getItem("r24Token");

      if (r24Token) {
        const user = await getUserToken(r24Token);
        setUser(user);
      }
    };

    getUserTokenHandler();
  }, [jwt])

  return (
    <>
      <UserContext.Provider
        value={{ user, setUser }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}
