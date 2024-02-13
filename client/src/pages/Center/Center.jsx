import styles from "./center.module.css";
import NotFound from "../../components/NotFound/NotFound";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { Icon } from "@iconify/react";

export default function Center() {
  const [currentRum, setCurrentRum] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const params = useParams();
  const rumID = params.id;

  const serverURL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const getUserProjects = async () => {
      const response = await axios.get(serverURL);
      const responseData = await response.data;

      const filterRum = responseData.filter((x) => {
        return x._id === rumID;
      });
      filterRum.length > 0 ? setCurrentRum(filterRum) : setNotFound(!notFound);
    };
    getUserProjects();
  }, [params.id]);

  const stacks = ["Next.js", "React", "JavaScript"];

  return (
    <>
      
      {notFound ? <NotFound /> :

     ( 
      <>
      <div className={styles.editContainer}>
            <button > Add a Project </button>
            <button> Edit Profile </button>
        </div>

      <main className={styles.container}>
        {currentRum.map((x) => {
          return (
            <> 
              <section className={styles.imgContainer}>
                <img src={x.image} className={styles.rumImage} />
              </section>

              <section className={styles.detailsContainer}>
                <h1> {x.rum} </h1>
                <h3> About {x.rum} </h3>
                <p> {x.description} </p>

                <h3> {x.rum} Stack </h3>
                <div className={styles.stackContainer}>
                  {stacks.map((x) => {
                    return (
                      <>
                        <button> {x} </button>
                      </>
                    );
                  })}
                </div>

                <div className={styles.linkContainer}>
                  <div className={styles.link}>
                    <h4> Website</h4>
                    <Icon
                      icon="fluent-mdl2:go"
                      color="black"
                      width="20"
                      height="20"
                    />
                  </div>

                  <div className={styles.link}>
                  <h4> GitHub <span className={ styles.githubProfile }> {` [${x.user}]`} </span> </h4>
                    <Link to={`https://github.com${x.user}`} className={styles.noStyle}>
                    <Icon
                      icon="fluent-mdl2:go"
                      color="black"
                      width="20"
                      height="20"
                    />
                    </Link>
                  </div>

                  <Link to={`https:${x.source}`} className={styles.link}>
                    <h4> Twitter (X) </h4>
                    <Icon
                      icon="fluent-mdl2:go"
                      color="black"
                      width="20"
                      height="20"
                    />
                  </Link>


                </div>
              </section>
            </>
          );
        })}
      </main>
      </>
    ) }
    </>
  );
}
