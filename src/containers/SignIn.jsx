import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => (
  <section className="singIn">
  <div className="singIn__container">
    <h2>Inicio sesión</h2>
    <form className="singIn__container-form">
      <input type="text" placeholder="Correo" />
      <input type="password" placeholder="Contraseña" />
      <button className="button">Iniciar sesión</button>
      <div className="singIn__container-remember">
        <label>
          <input type="checkbox" id="cbox1" value="checkbox" />Recuerdame
        </label>
        <Link to="/">Olvidé mi contraseña</Link>
      </div>
    </form>
    <p className="login__container--register">
      ¿No tienes ninguna cuenta? <Link to="/signUp">Regístrate</Link>
    </p>
  </div>
</section>
);

export default SignIn;