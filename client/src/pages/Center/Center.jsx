import styles from "./center.module.css";
import NotFound from "../../components/NotFound/NotFound";
import { getProjects } from "@api/projects";


import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { Icon } from "@iconify/react";

export default function Center() {
  const [currentProject, setCurrentProject] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const params = useParams();
  const projectId = params.id;
  
  useEffect(() => {
    const fetchProject = async () => {
      const projects = await getProjects();

      const filterProject = projects.filter((x) => {
        return x._id === projectId;
      });
      filterProject.length > 0 ? setCurrentProject(filterProject) : setNotFound(!notFound);
    };
    fetchProject();
  }, [params.id]);


  const stacks = ["Next.js", "React", "JavaScript"];

  return (
    <>


      <div className={styles.editContainer}>
            <button > Add a Project </button>
            <button> Edit Profile </button>
        </div>

      <main className={styles.container}>
        {currentProject.map((x) => {
          return (
            <> 
              <section className={styles.imgContainer}>
                <img src={x.image} className={styles.rumImage} />
              </section>

              <section className={styles.detailsContainer}>
                <h1> {x.title} </h1>
                <h3> About {x.title} </h3>
                <p> {x.description} </p>

                <h3> {x.title} Stack </h3>
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
  );
}
