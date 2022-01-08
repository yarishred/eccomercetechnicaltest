import React from "react";

import "./FooterSection.css";
export const FooterSection = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="politicas">
          <h3>Políticas</h3>
          <br />
          <p>Politicas de privacidad</p>
          <p>Politicas de cambio</p>
          <p>Politicas de envío</p>
          <p>Términos y condiciones</p>
          <p>Responsabilidad Social</p>
        </div>
        <div className="sobre_nosotros">
          <h3>Sobre Nosotros</h3>
          <br />
          <p>Encuentra tu tienda</p>
          <p>Contáctanos</p>
          <p>Trabaja con nosotros</p>
        </div>
        <div className="redes-sociales">
          <h3>Síguenos en:</h3>
          <br />
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p> &copy; Copyright Colombia. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};
