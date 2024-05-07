import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const [user, setUser] = useState("");

    useEffect(() => {
      const getUserToken = async () => {
        const r24Token = localStorage.getItem("r24Token");
      };

      getUserToken();
    }, [user]);

    const remainLoggedIn = () => {
      const accessToken = localStorage.getItem("r24Token");
      accessToken ? setIsLoggedIn(true) : setIsLoggedIn(false);
    };

    remainLoggedIn();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("r24Token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn, handleLogout, jwt }}>
        {isLoggedIn ? children : <Auth />}
      </AuthContext.Provider>
    </>
  );
}
