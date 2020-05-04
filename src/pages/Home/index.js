import React, { useState } from "react";

import {} from "react-icons/fi";

import content from "../../backend";

export default function Home() {
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
        {conteudos.map((conteudo) => (
          <li>
            <p>{conteudo.titulo}</p>
            <img src={conteudo.imagem} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
