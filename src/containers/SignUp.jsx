import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => (
  <section className="singIn">
    <div className="singIn__container">
      <h2>Registrarme</h2>
      <form className="singIn__container-form">
        <input type="email" placeholder="Correo" />
        <input type="text" placeholder="Nombre" />
        <input type="tel" placeholder="Celular" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Confirma contraseña" />
        <button className="button">Registrar</button>
      </form>

      <p className="login__container--register">
        ¿Ya tienes cuenta? <Link to="/signIn">Inicia sesión</Link>
      </p>
    </div>
  </section>
);

export default SignUp;