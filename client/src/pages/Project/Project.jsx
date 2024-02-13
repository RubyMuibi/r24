import styles from "./project.module.css";
import NotFound from "@components/NotFound/NotFound";
import { getProjects } from "@api/projects";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Icon } from '@iconify/react';

export default function Project() {
  const [currentProject, setCurrentProject] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const params = useParams();
  const projectId = params.id;
  
  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();

      const filterProject = projects.filter((x) => {
        return x._id === projectId;
      });
      filterProject.length > 0 ? setCurrentProject(filterProject) : setNotFound(!notFound);
    };
    fetchProjects();
  }, [params.id]);

  return (
    <>
      {notFound ? <NotFound /> :

     (  <main className={ styles.container }>
        {currentProject.map((x) => {
          return (
            <>
              <section className={ styles.imgContainer }>
                <img src={x.image}  className={ styles.rumImage } />
              </section>

              <section className={ styles.detailsContainer }>
              <h1> {x.title} </h1>
              <h3> {x.description} </h3>


              <div className={ styles.linkContainer } >
                
                <div className={ styles.link }>
                    <h4> Developer: </h4>
                    <h5> {x.user}  </h5>
                    
                </div>

                <div className={ styles.link }> 
                <h4> Project Stack: </h4>
                <h5> {x.stack} </h5>
                </div>

                <Link to={`https:${x.source}`} className={ styles.link }>
                    <h4> Source Code: </h4>
                    <Icon icon="fluent-mdl2:go" color="black" width="20" height="20" />
                </Link>

                <Link to={x.url} className={ styles.link }>
                    <h4> Demo: </h4>
                    <Icon icon="fluent-mdl2:go" color="black" width="20" height="20" />
                </Link>
              </div>

              </section>
            </>
          );
        })}
      </main>
     ) }
    </>
  );
}
