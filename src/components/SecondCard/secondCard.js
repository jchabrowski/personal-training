import React from 'react';
import anthonySquare from '../../images/anthony-kwadrat.jpg'
import { Link } from "gatsby";
import '../../styles/all.css';
import '../FirstCard/firstCard.css'

const SecondCard = () => {
  return (
    <div className="container frame d-flex py-3 my-3" id="training">
      <div className="container mr-0 pr-0 col-sm-12 col-md-6">
        <img src={anthonySquare} alt="anthony" className="barbell-img"/>
      </div>
      <div className="container px-4 pt-2 ml-0 col-sm-12 col-md-6">
        <h2>Trening personalny</h2>
        <p>Na naszej pierwszej konsultacji przeprowadzę z Tobą wywiad i trening, po czym dobiorę najefektywniejszy plan działania. Możemy następnie zacząć trenować na odpowiadającej Tobie siłowni na terenie trójmiasta.</p>
        <p>Treningi prowadzę w największych obiektach na terenie Gdyni i Gdańska. <Link to="/" className="growth-style"><strong>Napisz do mnie</strong></Link> aby uzyskać więcej informacji i ustalić miejsce naszego spotkania.</p>
        <h2>Treningi w dobie epidemii</h2>
        <p>Współpraca z klientami jest dostosowywana do aktualnych zaleceń sanitarno-epidemiologicznych, obowiązujących na terenie województwa Pomorskiego.</p>
        <p>Spotkajmy się na świeżym powietrzu, bądź zainteresuj się współpracą online!</p>
      </div>
    </div>
  )
}

export default SecondCard