import React from 'react';
import '../../../styles/all.css';

const TrainingCards = () => {
  return (
    <div className="card-deck px-auto mx-auto col-md-12 py-3">
    <div className="card pose-hold">
      <div className="card-body">
      <h4 className="card-title">Pakiet Treningów</h4>
        <p className="card-text">Jesteś zdecydowany/a na stałą współpracę?</p>
        <ul className="no-decoration">
          <li><strong>Pakiet 10 treningów</strong></li>
          <li>Monitorowanie postępów</li>
          <li>Periodyzacja treningowa</li>
          <li>Weryfikacja techniki</li>
        </ul>
        <button className="btn-lg btn-transparent">ZAPISZ SIĘ</button>
      </div>
    </div>
    <div className="card pose-front">
      <div className="card-body">
        <h4 className="card-title">Pojedynczy trening</h4>
        <p className="card-text">Potrzebujesz pomocy z konkretnymi aspektami Twojego treningu?</p>
        <ul className="no-decoration">
          <li>Analiza techniki ćwiczeń</li>
          <li>Korygowanie błędów</li>
          <li>Indywidualna konsultacja</li>
        </ul>
        <button href="/#contact" className="btn-lg btn-transparent">ZAPISZ SIĘ</button>
      </div>
    </div>
    <div className="card pose-pull">
      <div className="card-body">
        <h4 className="card-title">Współpraca online</h4>
        <p className="card-text">Napisz do mnie, aby dowiedzieć się w jakiej formie prowadzę aktualnie współpracę online.</p>
        <button className="btn-lg btn-transparent">NAPISZ</button>
      </div>
    </div>
  </div>
  )
} 

export default TrainingCards