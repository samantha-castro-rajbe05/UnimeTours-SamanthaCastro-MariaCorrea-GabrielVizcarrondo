import React from "react";
import "./vars.css";
import "./styleinicio.css";
import rectangle27 from "../assets/rectangle-270.png";
import userIcon from "../assets/user0.svg";
import logInIcon from "../assets/log-in0.svg";
import logoGris from "../assets/logo-gris-oscuro-10.png";
import line1 from "../assets/line-10.svg";
import path14 from "../assets/path-140.svg";
import googleLogo from "../assets/logo-googleg-48-dp0.svg";
import facebookIcon from "../assets/facebook0.svg";
import phoneIcon from "../assets/phone-call0.svg";
import barraAbajo from "../assets/barra-abajo0.png";

function InicioSesion() {
  
  <script src="./main.jsx" type ="module"></script>
  return (
    <div className="inicio-de-sesi-n">
      <img className="rectangle-27" src={rectangle27} alt="Fondo" />

      {/* Barra de navegación */}
      <div className="barra">
        <div className="rectangle-9"></div>
        <div className="ellipse-1"></div>
        <img className="user" src={userIcon} alt="Usuario" />
        <img className="log-in" src={logInIcon} alt="Login" />
        <div className="rutas">Rutas</div>
        <div className="galer-a">Galería</div>
        <div className="blog">Blog</div>
        <div className="cont-ctanos">Contáctanos</div>
        <div className="naturaleza">Naturaleza</div>
        <div className="feedback">Feedback</div>
        <img className="logo-gris-oscuro-1" src={logoGris} alt="Logo" />
      </div>

      {/* Formulario de inicio de sesión */}
      <div className="iniciar-sesion">
        <div className="rectangle-28"></div>
        <div className="email">Email</div>
        <img className="line-1" src={line1} alt="Línea divisoria" />
        <div className="iniciar-sesi-n-en-unime-tours">
          Iniciar sesión en UnimeTours
        </div>
        <div className="rectangle-29"></div>
        <div className="contrase-a">Contraseña</div>
        <div className="rectangle-30"></div>
        <input
          type="email"
          className="uni-metro-correo-unimet-edu-ve"
          placeholder="uni.metro@correo.unimet.edu.ve"
        />
        <input
          type="password"
          className="introduce-tu-contrase-a"
          placeholder="Introduce tu contraseña"
        />

        <div className="no-tienes-una-cuenta-registrarse">
          <span>No tienes una cuenta? </span>
          <span className="registrarse">Registrarse</span>
        </div>

        <div className="button">
          <button className="button2">Iniciar sesión</button>
        </div>

        <div className="continue-with-facebook-left-aligned-fixed"></div>
        <div className="continue-with-facebook">Continuar con Facebook</div>
        <img className="path-14" src={path14} alt="Ícono Facebook" />

        <div className="continue-with-google-left-aligned-fixed"></div>
        <div className="continue-with-google">Continuar con Google</div>
        <div className="google-logo">
          <img className="logo-googleg-48-dp" src={googleLogo} alt="Google" />
        </div>
      </div>

      {/* Pie de página */}
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
    </div>
  );
}

export default InicioSesion;
