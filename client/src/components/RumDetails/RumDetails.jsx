import rumStyles from "./rum-details.module.css";
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

  const serverURL = "http://localhost:4000/";

  
  const rumsList = [
    {
        id: "1",
      name: "Ruby Muibi",
      rumShot:
        "https://cdn.dribbble.com/userupload/11955935/file/original-00a3e1bd493cf482288fd9d7a18767ef.png?resize=1504x1128",
      rumName: "Rum Punch Shot",
    },
    {
        id: 2,
      name: "Ruby Muibi",
      rumShot:
        "https://cdn.dribbble.com/userupload/12261880/file/original-b57a956aa0bfc9db4f8b4b7fab75622f.jpg?resize=1504x1128",
      rumName: "Rum Punch Shot",
    },
    {
        id: 3,
      name: "Ruby Muibi",
      rumShot:
        "https://cdn.dribbble.com/userupload/12287461/file/original-bfa0d2298c6ea7c705ffb56d74145f84.png?resize=1504x1128",
      rumName: "Rum Punch Shot",
    },
    {
        id: 4,
      name: "Ruby Muibi",
      rumShot:
        "https://cdn.dribbble.com/userupload/11913848/file/original-f76bda1086a50c8f6073876a2f30cca9.jpg?resize=1504x1128",
      rumName: "Rum Punch Shot",
    },
    {
        id: 5,
      name: "Ruby Muibi",
      rumShot:
        "https://cdn.dribbble.com/userupload/12079976/file/original-7aab739c66c44e1e17fdabd899bcd2b0.jpg?resize=1504x1128",
      rumName: "Rum Punch Shot",
    },
  ];


  

  useEffect(() => {
    const getRum = async () => {
      /* const response = await axios.get(serverURL);
      const responseData = await response.data; 

      const filterRum = responseData.filter((x) => {
        return x._id === rumID;
      });
      filterRum.length > 0 ? setCurrentRum(filterRum) : setNotFound(!notFound);
      */

      const filterRum = rumsList.filter((x) => {
        return x.id == rumID;
    });

    filterRum.length > 0 ? setCurrentRum(filterRum) : setNotFound(!notFound);

      
    };
    getRum();
  }, [params.id]);

  console.log("current rum is", currentRum);
  return (
    <>
      {notFound && <NotFound />}

      <main className={ rumStyles.container }>
        {currentRum.map((x) => {
          return (
            <>
              <section className={ rumStyles.imgContainer }>
                <img src={x.rumShot}  className={ rumStyles.rumImage } />
              </section>

              <section className={ rumStyles.detailsContainer }>
              <h1> {x.name} </h1>
              <h2> -{x.name} </h2>
              <h3> {x.name} </h3>


              <div className={ rumStyles.linkContainer } >
                
                <div className={ rumStyles.link }>
                    <h4> Brand: </h4>
                    <h5> {x.name}  </h5>
                    
                </div>

                <div className={ rumStyles.link }> 
                <h4> Rum Mix: </h4>
                <h5> {x.name} </h5>
                </div>

                <Link to={`https:${x.url}`} className={ rumStyles.link }>
                    <h4> Experience {x.name}: </h4>
                    <Icon icon="fluent-mdl2:go" color="black" width="20" height="20" />
                </Link>

                <Link to={x.name} className={ rumStyles.link }>
                    <h4> RUM Source: </h4>
                    <Icon icon="fluent-mdl2:go" color="black" width="20" height="20" />
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
