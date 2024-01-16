import notFoundStyles from "./not-found.module.css"

import { Link } from "react-router-dom";

export default function NotFound () {
  return (
    <>
      <div className={ notFoundStyles.container }>
        <h1> 404 RUM </h1>
        <h2> Your link disappeared faster than last night's Rum Punch. Contact our webtenders for assistance or click 'Rum' to find your way back to the premium RUM collections.</h2>
        <Link to="/">
         <button> RUM </button>
        </Link>
      </div>
    </>
  );
};
