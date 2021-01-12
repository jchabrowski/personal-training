import React from 'react';
import anthonySquare from '../../images/anthony-kwadrat.jpg'
import '../../styles/all.css';
import './training.css';
import { Link } from "gatsby";
import TrainingCards from './training-cards/training-cards';

const Training = () => {
  return (
    <>
      <div className="container frame d-flex py-3 mt-5">
        <div className="container col-md-12 col-lg-6 py-3">
          <h2>Pierwszy trening</h2>
          <p>Nasze pierwsze spotkanie będzie składało się z krótkiego wywiadu oraz treningu, mającego na celu sprawdzenie Twoich możliwości ruchowych (bez stresu, każdy gdzieś musi zacząć) i ustalenia pierwszych celów treningowych.</p>
          <p>Zapytam Cię między innymi o:</p>
          <ul id="benefit-list">
            <li> Twoje relacje z aktywnością fizyczną</li>
            <li> Potencjalne przeciwwskazania i historię kontuzji</li>
            <li> Cel treningowy, który chcesz osiągnąć</li>
            <li> Styl życia i nawyki</li>
          </ul>
          <p>Przeprowadzę z Tobą następnie ogólnorozwojowy trening, zawierający podstawowe testy funkcjonalne, dzięki którym będę mógł odnaleźć i ocenić "słabe ogniwa" w Twoim aparacie ruchu.</p>
          <p>Po takim spotkaniu będę posiadał niezbędną wiedzę aby dobrać odpowiednie środki i ułożyć dalszy plan naszej współpracy.</p>
        </div>
        <div className="container d-flex col-md-12 col-lg-6 py-3 align-items-center">
          <img src={anthonySquare} alt="anthony"></img>
        </div>
      </div>

      <div className="container frame py-3 my-3">
        <div className="container pt-3">
          <h2>Rodzaje współpracy</h2>
          <p>W zależności od Twoich indywidualnych potrzeb oraz preferencji, możemy współpracować w różnej formie.</p>
          <TrainingCards />
        </div>
      </div>
    </>
  )
}

export default Training