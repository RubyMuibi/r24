import rumsStyles from "./rums.module.css";

import { useState, useEffect } from "react";

import { Icon } from "@iconify/react";

export default function Rums() {
  const [rums, setRums] = useState([]);

  const rumsList = [
    {
      name: "Ruby Muibi",
      rumShot:
        "https://cdn.dribbble.com/userupload/11955935/file/original-00a3e1bd493cf482288fd9d7a18767ef.png?resize=1504x1128",
      rumName: "Rum Punch Shot",
    },
    {
      name: "Ruby Muibi",
      rumShot:
        "https://cdn.dribbble.com/userupload/12261880/file/original-b57a956aa0bfc9db4f8b4b7fab75622f.jpg?resize=1504x1128",
      rumName: "Rum Punch Shot",
    },
    {
      name: "Ruby Muibi",
      rumShot:
        "https://cdn.dribbble.com/userupload/12287461/file/original-bfa0d2298c6ea7c705ffb56d74145f84.png?resize=1504x1128",
      rumName: "Rum Punch Shot",
    },
    {
      name: "Ruby Muibi",
      rumShot:
        "https://cdn.dribbble.com/userupload/11913848/file/original-f76bda1086a50c8f6073876a2f30cca9.jpg?resize=1504x1128",
      rumName: "Rum Punch Shot",
    },
    {
      name: "Ruby Muibi",
      rumShot:
        "https://cdn.dribbble.com/userupload/12079976/file/original-7aab739c66c44e1e17fdabd899bcd2b0.jpg?resize=1504x1128",
      rumName: "Rum Punch Shot",
    },
  ];

  return (
    <>
      <main className={rumsStyles.container}>
        {rumsList.map((x) => {
          return (
            <>
              <section className={rumsStyles.rumContainer}>
                <div className={rumsStyles.imgContainer}>
                  <img src={x.rumShot} className={rumsStyles.img} />
                </div>

                <div className={rumsStyles.detailsContainer}>
                  <h3>{x.name}</h3>
                  <h3>{x.rumName}</h3>
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
              </section>
            </>
          );
        })}
      </main>
    </>
  );
}
