import React from 'react';
import '../../styles/all.css';
import './cards.css';

const CooperationCards = () => {
  return (
    <div className="card-deck px-auto mx-auto col-md-12 py-3">
    <div className="card pose-hold">
      <div className="card-body">
        <h4 className="card-title">Pakiet Treningów</h4>
        <p className="card-text">Jesteś zdecydowany/a na stałą współpracę?</p>
        <ul id="no-decoration">
          <li><strong>Pakiet 10 treningów</strong></li>
          <li>Monitorowanie postępów</li>
          <li>Periodyzacja treningowa</li>
          <li>Weryfikacja techniki</li>
        </ul>
        <button className="btn-lg btn-transparent">SZCZEGÓŁY</button>
      </div>
    </div>
    <div className="card pose-front">
      <div className="card-body">
        <h4 className="card-title">Pierwsza&nbsp;konsultacja</h4>
        <p>Czego możesz się spodziewać:</p>
        <ul id="no-decoration">
          <li>Wywiad</li>
          <li>Trening</li>
          <li>Testy funkcjonalne</li>
          <li>Określenie celów współpracy</li>
        </ul>
        <button className="btn-lg btn-transparent">SZCZEGÓŁY</button>
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

export default CooperationCards