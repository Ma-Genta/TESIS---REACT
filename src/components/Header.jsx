import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/virus.svg';

const Header = () => {
  const down = () => {
    setTimeout(() => window.location.hash = "#informacion", 100);
  }
  return (
        <header>
          <div className="header__contenedor">
          <Link to="/"><img
            className="header__contenedor-logo"
            src={Logo}
            alt="Logo"/>
          </Link>
        <label for="checkbox" className="header__contenedor-hamburger"></label>
        <input type="checkbox" id="checkbox" />
        <ul className="menu">
          <li><Link to="/" onClick={down}>informacion</Link></li>
          <li><Link to="/signIn">Iniciar sesión</Link></li>
          <li><Link to="/SignUp">Registrarme</Link></li>
          <li><Link to="/">etc</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;