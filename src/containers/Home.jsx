import React from 'react';
//Images
import icon1 from "../assets/img/CovIcon/003-protection.svg";
import icon2 from '../assets/img/CovIcon/007-alcohol.svg';
import icon3 from '../assets/img/CovIcon/004-boots.svg';
import icon4 from '../assets/img/CovIcon/005-gloves.svg';

const Home = () => {
return (
  <>
  <section className="hero">
    <div className="hero__contenedor">
      <div className="hero__contenedor-text">
        <h1>DonApp</h1>
        <h4>¡Es hora de ayudarnos <br/> mutuamente!</h4>
      </div>
      <div className="hero__contenedor-imagen">
      </div>
    </div>
  </section>

  <section className="informacion" id="informacion">
    <h1>informacion</h1>
    <div className="informacion__contenedor">
      <div className="informacion__contenedor-item">
        <img src={icon1} alt=""></img>
        <h1>Titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus, error dolor aperiam ea in delectus facere consectetur similique id laudantium quis corporis repellat sint consequuntur quia. Tenetur, facere deserunt.</p>
      </div>
      <div className="informacion__contenedor-item">
        <img src={icon2} alt=""></img>
        <h1>Titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus, error dolor aperiam ea in delectus facere consectetur similique id laudantium quis corporis repellat sint consequuntur quia. Tenetur, facere deserunt.</p>
      </div>
    </div>
    <div className="informacion__contenedor">
      <div className="informacion__contenedor-item">
        <img src={icon3} alt=""></img>
        <h1>Titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus, error dolor aperiam ea in delectus facere consectetur similique id laudantium quis corporis repellat sint consequuntur quia. Tenetur, facere deserunt.</p>
      </div>
      <div className="informacion__contenedor-item">
        <img src={icon4} alt=""></img>
        <h1>Titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus, error dolor aperiam ea in delectus facere consectetur similique id laudantium quis corporis repellat sint consequuntur quia. Tenetur, facere deserunt.</p>
      </div>
    </div>
  </section>
  </>
);
}
export default Home;