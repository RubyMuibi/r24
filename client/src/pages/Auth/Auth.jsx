
import { AuthContext } from "../../contexts/AuthContext";

import { useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

export default function Auth () {
  const { isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect( () => {
    const id = "65b2c1554f0beeccb643f2bd"
    if (isLoggedIn) {
      navigate(`/${id}`)
    }
  }, [isLoggedIn] )

  return (
    <>
    </>
  );
};
