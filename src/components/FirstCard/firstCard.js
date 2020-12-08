import React from 'react';
import jakubSquare from '../../images/jakub-profil2.jpg';
import './firstCard.css';

const FirstCard = () => {
  return (
    <div className="container frame d-flex py-3 mt-3" id="about-me">
      <div className="container mr-0 px-4 col-sm-12 col-md-6">
        <h2>O mnie</h2>
        <p>Jestem magistrem fizjoterapii AWFiS Gdańsk, trenerem personalnym z wieloletnim doświadczeniem, pasjonatem układu ruchu człowieka i kinezjologii.</p>
        <p>W pracy z klientami priorytetem jest dla mnie nauczenie fundamentalnych wzorców ruchowych, umożliwiających bezpieczne:</p>
        <ul id="benefit-list">
          <li> Doskonalenie sprawności ruchowej</li>
          <li> Zwiększenie siły maksymalnej</li>
          <li> Rekompozycję składu masy ciała</li>
          <li> Przygotowanie motoryczne i prewencję kontuzji</li>
          <li> Osiągnięcie Twoich indywidualnych celów sylwetkowych</li>
        </ul>
      </div>
      <div className="container pl-0 ml-0 col-sm-12 col-md-6">
        <img src={jakubSquare} alt="jakub"/>
      </div>
    </div>
  )
}

export default FirstCard