import styles from "./rum-details.module.css";
import NotFound from "../../components/NotFound/NotFound";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { Icon } from '@iconify/react';

export default function RumDetails() {
  const [currentRum, setCurrentRum] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const params = useParams();
  const rumID = params.id;

  const serverURL = import.meta.env.VITE_SERVER_URL;

  
  useEffect(() => {
    const getRum = async () => {
      const response = await axios.get(serverURL);
      const responseData = await response.data;

      const filterRum = responseData.filter((x) => {
        return x._id === rumID;
      });
      filterRum.length > 0 ? setCurrentRum(filterRum) : setNotFound(!notFound);
    };
    getRum();
  }, [params.id]);

  return (
    <>
      {notFound ? <NotFound /> :

     (  <main className={ styles.container }>
        {currentRum.map((x) => {
          return (
            <>
              <section className={ styles.imgContainer }>
                <img src={x.image}  className={ styles.rumImage } />
              </section>

              <section className={ styles.detailsContainer }>
              <h1> {x.rum} </h1>
              <h3> {x.description} </h3>


              <div className={ styles.linkContainer } >
                
                <div className={ styles.link }>
                    <h4> RUM Developer: </h4>
                    <h5> {x.user}  </h5>
                    
                </div>

                <div className={ styles.link }> 
                <h4> Rum Mix: </h4>
                <h5> {x.mix} </h5>
                </div>

                <Link to={`https:${x.source}`} className={ styles.link }>
                    <h4> RUM Source Code: </h4>
                    <Icon icon="fluent-mdl2:go" color="black" width="20" height="20" />
                </Link>

                <Link to={x.url} className={ styles.link }>
                    <h4> RUM Demo: </h4>
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
