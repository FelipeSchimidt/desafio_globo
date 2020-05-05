import React, { useState } from "react";

import {} from "react-icons/fi";

import content from "../../backend";

import noticia from "../../assets/img/noticias.jpg";
import esporte from "../../assets/img/esportes.jpg";
import podcast from "../../assets/img/podcast.jpg";
import globoPlay from "../../assets/img/globo play.jpg";
import tecnologia from "../../assets/img/tech.jpg";
import entretenimento from "../../assets/img/Gshow.jpg";

export default function Home(props) {
  const [conteudos, setConteudos] = useState(content.conteudos);

  return (
    <div className="">
      <form action="">
        <div className="form-group">
          <label htmlFor="" className>
            O que voce quer ver hoje?
          </label>
          <input type="text" className="form-control"></input>
        </div>
      </form>
      <br />
      <ul>
        <li>
          <img src={noticia} alt="" />
          <img src={podcast} alt="" />
          <img src={globoPlay} alt="" />
          <img src={entretenimento} alt="" />
          <img src={tecnologia} alt="" />
          <img src={esporte} alt="" />
        </li>
      </ul>
    </div>
  );
}
