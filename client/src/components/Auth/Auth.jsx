import styles from "./auth.module.css"
import { useState, useEffect } from "react";

import axios from "axios";

export default function Auth() {
  const [reload, setReload] = useState(false);  
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  const handleGithubLogin = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${clientID}`
    );
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const githubCode = searchParams.get("code");

    if (githubCode) {
      const fetchAccessToken = async () => {
        const apiURL =  `${import.meta.env.VITE_SERVER_URL}/authUser`;
        const params = `?code=${githubCode}`;
        const response = await axios.get(`${apiURL}${params}`);
        const responseData = await response.data;
        const accessToken = responseData.access_token
        console.log(responseData);

        localStorage.setItem("accessToken", accessToken)
        setIsLoggedIn(true)
      };

      fetchAccessToken();
      setReload(!reload);
    }

    const remainLoggedIn = () => {
      const accessToken = localStorage.getItem("accessToken");

      accessToken ? setIsLoggedIn(true) : setIsLoggedIn(false)
    }

    remainLoggedIn();

    console.log(githubCode);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    setIsLoggedIn(false)
  }

  return (
    <>
      <main className={ styles.container }>
          
          {isLoggedIn ? (
            <div className={ styles.auth }>
            <h1> Authenticated! </h1>
            <p>You are logged in: More features coming soon for a better R24 experience!</p>
            <button onClick={handleLogout} > Logout </button>
            </div>
            
            ) :

          (  
           <div className={ styles.notAuth } onClick={handleGithubLogin}>
           <h3> To continue to R24</h3>
          <button>Log in with GitHub</button>
          </div>
          )
          }
         
      </main>
    </>
  );
}
