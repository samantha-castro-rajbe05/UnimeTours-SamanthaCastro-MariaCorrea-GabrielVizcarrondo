import React from "react";
import "./vars.css";
import "./style_contactanos.css";
import rectangle15 from "../assets/rectangle-150.png";
import icono1 from "../assets/_10.png";
import icono2 from "../assets/_20.png";
import gal291 from "../assets/gal-2910.png";
import userIcon from "../assets/user0.svg";
import logInIcon from "../assets/log-in0.svg";
import logoGris from "../assets/logo-gris-oscuro-10.png";
import barraAbajo from "../assets/barra-abajo0.png";
import facebookIcon from "../assets/facebook0.svg";
import phoneIcon from "../assets/phone-call0.svg";
import dragIcon from "../assets/drag0.svg";

function Contactanos() {
  return (
    <div className="cont-ctanos">
      <img className="rectangle-15" src={rectangle15} alt="Fondo" />
      <div className="cont-ctanos2">CONTÁCTANOS</div>
      <div className="titulo">Formulario</div>
      <div className="texto-no-se-que-poner">
        Rellena este formulario para ponernos en contacto contigo
      </div>
      <img className="_1" src={icono1} alt="Icono" />
      <img className="gal-291" src={gal291} alt="Imagen galería" />
      <img className="_2" src={icono2} alt="Icono" />

      <div className="barra">
        <div className="rectangle-9"></div>
        <div className="ellipse-1"></div>
        <img className="user" src={userIcon} alt="Usuario" />
        <img className="log-in" src={logInIcon} alt="Login" />
        <div className="rutas">Rutas</div>
        <div className="galer-a">Galería</div>
        <div className="blog">Blog</div>
        <div className="cont-ctanos3">Contáctanos</div>
        <div className="naturaleza">Naturaleza</div>
        <div className="feedback">Feedback</div>
        <img className="logo-gris-oscuro-1" src={logoGris} alt="Logo" />
      </div>

      <div className="tel-fono">Teléfono</div>
      <div className="_0412-5508612">0412-5508612</div>
      <div className="unimetours-gmail-com">unimetours@gmail.com</div>
      <div className="gmail">Gmail</div>

      <div
        className="barra-abajo"
        style={{
          background: `url(${barraAbajo}) center`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img className="facebook" src={facebookIcon} alt="Facebook" />
        <img className="phone-call" src={phoneIcon} alt="Teléfono" />
      </div>

      <div className="form-contact">
        <div className="input-field">
          <div className="label">Nombre</div>
          <div className="input">
            <input type="text" name="nombre" id="nombre" placeholder="Tu nombre" />
          </div>
        </div>

        <div className="input-field">
          <div className="label">Apellido</div>
          <div className="input">
            <input type="text" name="apellido" id="apellido" placeholder="Tu apellido" />
          </div>
        </div>

        <div className="input-field">
          <div className="label">Gmail</div>
          <div className="input">
            <input type="email" name="correo" id="correo" placeholder="ejemplo@correo.unimet.edu.ve" />
          </div>
        </div>

        <div className="textarea-field">
          <div className="label">Mensaje</div>
          <div className="textarea">
            <textarea name="mensaje" id="mensaje" cols="30" rows="6" placeholder="Escribe aquí..."></textarea>
            <img className="drag" src={dragIcon} alt="Arrastrar" />
          </div>
        </div>

        <div className="button-group">
          <div className="button">
            <button style={{ color: "white" }}>Enviar ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactanos;
