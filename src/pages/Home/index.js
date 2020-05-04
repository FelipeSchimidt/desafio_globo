import React, { useState } from "react";

import {} from "react-icons/fi";

import content from "../../backend";

export default function Home() {
  const [conteudos, setConteudos] = useState(content.conteudos);

  const contents = conteudos.map((content) => (
    <li>
      <p>{content.titulo}</p>
      <image src={content.imagem.toString()} />
    </li>
  ));

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
      <ul>{contents}</ul>
    </div>
  );
}
