import styles from "./news.module.css"

import Header from "../Header/Header";
import Marquee from "../Marquee/Marquee";

import { useState, UseEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios"

export default function News () {

    const data = [
        {title: "New open-source AI tool by Ruby Muibi", user: "Ruby", url: "https://rubymuibi.com"}, 
    ]

  return (
    <> 
    <Header/>
     <main className={ styles.container }>
     <Marquee/>

      <section className={ styles.section }>
       { data.map( (x) => {
        return (
            <>
                <div className={ styles.hnContainer }> 
                 <h2> {x.title}  </h2>
                 <div>
                    <p> {x.user} </p>
                    <p> {x.url} </p>
                    <p> comment </p>
                 </div>
                </div>
            </>
        )
       }) }
      </section>
     </main>
    </>
  );
};
