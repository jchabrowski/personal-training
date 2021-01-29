import React from 'react';
import './training-cards.css';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const TrainingCards = () => {
  return (
    <div className="card-deck px-auto mx-auto col-md-12 py-3">
    <div className="card card-offer pose-hold">
      <div className="card-body">
      <h4 className="card-title">Pakiet Treningów</h4>
        <p className="card-text">Jesteś zdecydowany/a na stałą współpracę?</p>
        <ul className="no-decoration">
          <li><strong>Pakiet 10 treningów</strong></li>
          <li>Monitorowanie postępów</li>
          <li>Periodyzacja treningowa</li>
          <li>Weryfikacja techniki</li>
          <li className="price">1050 zł</li>
        </ul>
        <AnchorLink to="/training/#contact" className="stripped" stripHash><button className="btn-lg btn-transparent">ZAPISZ SIĘ</button></AnchorLink>
      </div>
    </div>
    <div className="card card-offer pose-front">
      <div className="card-body">
        <h4 className="card-title">Pojedynczy trening</h4>
        <p className="card-text">Potrzebujesz pomocy z konkretnymi aspektami Twojego treningu?</p>
        <ul className="no-decoration">
          <li>Analiza techniki ćwiczeń</li>
          <li>Korygowanie błędów</li>
          <li>Indywidualna konsultacja</li>
          <li className="price">130 zł</li>
        </ul>
        <AnchorLink to="/training/#contact" className="stripped" stripHash><button className="btn-lg btn-transparent">ZAPISZ SIĘ</button></AnchorLink>
      </div>
    </div>
    <div className="card card-offer pose-pull">
      <div className="card-body">
        <h4 className="card-title">Współpraca online</h4>
        <p className="card-text">Napisz do mnie, aby dowiedzieć się w jakiej formie prowadzę aktualnie współpracę online.</p>
        <AnchorLink to="/training/#contact" className="stripped" stripHash><button className="btn-lg btn-transparent">NAPISZ</button></AnchorLink>
      </div>
    </div>
  </div>
  )
} 

export default TrainingCards