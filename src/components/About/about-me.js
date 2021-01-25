import React from 'react';
// import jakubPortret from '../../images/jakub-portret-square.jpg';
import '../../styles/all.css';
import './about-me.css';
import { Link } from "gatsby";

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
        <div className="container col-sm-12 col-md-6 py-3">
          <img src={require("/../images/jakub-portret-square.jpg")} alt="jakub"></img>
        </div>
      </div>

      <div className="container frame py-3 my-3">
        <div className="container pt-3">
          <h2>Treningi personalne</h2>
          <p>Zdecydowanie łatwiej zdecydować się na <span className="growth-style bold">podjęcie współpracy</span>, wiedząc na czym ma ona polegać.</p>
          <p>Dowiedz się czego możesz się spodziewać na naszym pierwszym treningu.</p>
          <Link to="/training"><button className="btn-training">Pierwszy trening</button></Link>
        </div>
      </div>
    </>
  )
}

export default AboutMe