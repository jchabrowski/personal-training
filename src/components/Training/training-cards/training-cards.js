import React from 'react';
import '../../../styles/all.css';
import { Link } from 'gatsby';

const TrainingCards = () => {
  return (
    <div className="card-deck px-auto mx-auto col-md-12 py-3">
    <div className="card pose-hold">
      <div className="card-body">
        <h4 className="card-title">Pakiet 10 Treningów</h4>
        <p className="card-text">Przeznaczony dla klientów chcących stale trenować pod moim okiem.</p>
        <ul>
          <li>Monitorowanie postępów</li>
          <li>Stała weryfikacja techniki</li>
          <li>Praca na podstawie planu treningowego</li>
        </ul>
        <button className="btn-lg btn-transparent">ZAPISZ SIĘ</button>
      </div>
    </div>
    <div className="card pose-front">
      <div className="card-body">
        <h4 className="card-title">Pojedynczy trening</h4>
        <p className="card-text">Potrzebujesz pomocy z konkretnymi aspektami Twojego treningu?</p>
        <ul>
          <li>Analiza techniki ćwiczeń</li>
          <li>Korygowanie błędów</li>
          <li>Indywidualna konsultacja</li>
        </ul>
        <button className="btn-lg btn-transparent">ZAPISZ SIĘ</button>
      </div>
    </div>
    <div className="card pose-pull">
      <div className="card-body">
        <h4 className="card-title">Współpraca online</h4>
        <p className="card-text">Dowiedz się jakie możliwości niesie współpraca przez internet</p>
        <ul>
          <li>Treningi online</li>
          <li>Układanie planów treningowych</li>
        </ul>
        <Link to="/online"><button className="btn-lg btn-transparent">SZCZEGÓŁY</button></Link>
      </div>
    </div>
  </div>
  )
} 

export default TrainingCards