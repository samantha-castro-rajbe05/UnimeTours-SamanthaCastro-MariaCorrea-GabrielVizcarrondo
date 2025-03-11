import React from "react";
import "./LandingPage.css"; // Archivo de estilos

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <h1>Bienvenido a UNIMETOURS</h1>
        <p>Explora el mundo con nosotros</p>
        <a href="#servicios" className="cta-button">Descubre más</a>
      </header>

      <section id="servicios" className="services">
        <h2>Nuestros Servicios</h2>
        <div className="service-card">
          <h3>Paquetes Turísticos</h3>
          <p>Disfruta de los mejores destinos con nuestros paquetes personalizados.</p>
        </div>
        <div className="service-card">
          <h3>Guías Expertos</h3>
          <p>Contamos con los mejores guías para garantizar una experiencia inolvidable.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 UNIMETOURS. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
