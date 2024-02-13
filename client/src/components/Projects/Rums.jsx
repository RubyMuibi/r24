import rumsStyles from "./rums.module.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Icon } from "@iconify/react";

export default function Rums() {
  const [rums, setRums] = useState([]);

  const serverURL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const getRums = async () => {
      const response = await axios.get(serverURL);
      const responseData = await response.data;
      setRums(responseData);
    };
    getRums();
  }, []);

  return (
    <>
      <main className={rumsStyles.container}>
        {rums.map((x) => {
          return (
            <>
              <Link to={`/rum/${x._id}`} className={rumsStyles.rumContainer}>
                <div className={rumsStyles.imgContainer}>
                  <img src={x.image} className={rumsStyles.img} />
                </div>

                <div className={rumsStyles.detailsContainer}>
                  <h3>{x.user}</h3>
                  <h3>{x.rum}</h3>
                  <div className={rumsStyles.likesContainer}>
                          <Icon
                              icon="mdi:heart"
                              color="gray"
                              width="16"
                              height="16"
                              className={rumsStyles.likeIcon}
                            />
                        <p> 444 </p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </main>
    </>
  );
}
