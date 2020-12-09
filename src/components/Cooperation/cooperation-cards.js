import React from 'react';
import '../../styles/all.css';

const CooperationCards = () => {
  return (
    <div className="card-deck px-auto mx-auto col-md-12 py-3">
    <div className="card pose-hold">
      <div className="card-body">
        <h4 className="card-title">Trening Personalny</h4>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className="btn-lg btn-transparent">SZCZEGÓŁY</button>
      </div>
    </div>
    <div className="card pose-front">
      <div className="card-body">
        <h4 className="card-title">Pierwsza konsultacja</h4>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <ul>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>
        <button className="btn-lg btn-transparent">SZCZEGÓŁY</button>
      </div>
    </div>
    <div className="card pose-pull">
      <div className="card-body">
        <h4 className="card-title">Współpraca online</h4>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <button className="btn-lg btn-transparent">WIĘCEJ</button>
      </div>
    </div>
  </div>
  )
} 

export default CooperationCards