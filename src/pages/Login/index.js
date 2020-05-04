import React from "react";

import "./styles.css";

import loginImg from "../../assets/img/fantastico-poster-web 1.jpg";
import logoGlobo from "../../assets/img/logo_globo.png";
import logoGloboMais from "../../assets/img/globo_mais.svg";

function Login() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoGlobo} alt="Icone Globo" className="logoGlobo" />
        <img
          src={logoGloboMais}
          alt="Icone App Globo Mais"
          className="logoGloboMais"
        />
      </section>
      {/* <form action="">
        <button className="btn btn-danger" id="btnEmail">
          Entre com o seu Email
        </button>
        <button className="btn btn-primary" id="btnFace">
          Entre com o seu Facebook
        </button>
      </form> */}
    </div>
  );
}

export default Login;
