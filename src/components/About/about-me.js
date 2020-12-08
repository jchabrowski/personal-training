import React from 'react';
import '../FirstCard/firstCard.css';
import jakubPortret from '../../images/jakub-portret3.jpg';
import '../../styles/all.css'

const AboutMe = () => {
  return (
    <>
      <div className="container frame d-flex py-3 mt-5">
        <div className="container col-md-12 col-lg-6 py-3">
          <h2>O mnie</h2>
          <p>Jestem magistrem fizjoterapii AWFiS Gdańsk, trenerem personalnym z wieloletnim doświadczeniem, pasjonatem układu ruchu człowieka i kinezjologii.</p>
          <p>Trenuję klientów indywidualnie oraz w parach. W treningach łączę elementy treningu siłowego, motorycznego oraz ogólnorozwojowego, dbając o <span className="growth-style bold">harmonijny rozwój cech motorycznych</span> moich podopiecznych.</p>
          <p>Priorytem w mojej pracy jest <span className="growth-style bold">nauka zdrowego, ekonomicznego ruchu</span>, który jest punktem wyjścia do dalszej pracy nad sylwetką i cechami fizycznymi.</p>
          <p>Współpracując z klientami skupiam się na podniesieniu ich ogólnej sprawności oraz rozwoju siły. Naturalnym efektem naszej współpracy są popularnie pożądane efekty, jak <span className="growth-style bold">redukcja tkanki tłuszczowej</span>, bądź <span className="growth-style bold">zwiększenie masy mięśniowej.</span></p>
        </div>
        <div className="container d-flex col-md-12 col-lg-6 py-3 align-items-center">
          <img src={jakubPortret}></img>
        </div>
      </div>

      <div className="container frame py-3 my-3">
        <div className="container pt-3">
          <h2>Treningi Personalne</h2>
          <p>Chicałbyś abym pomógł Ci w osiągnięciu Twoich celów?</p>
          <p>Dowiedz się czego możesz się spodziewać na pierwszym treningu</p>
          <button className="btn-form">Pierwszy trening</button>
        </div>
      </div>
    </>
  )
}

export default AboutMe