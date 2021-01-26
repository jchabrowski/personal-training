import React from 'react';
import { Link } from 'gatsby';
import CooperationCards from './cooperation-cards';
import '../../styles/all.css';
import '../FirstCard/firstCard.css';


const Cooperation = () => {
  return (
    <div className="container frame d-flex flex-column px-4 mx-auto my-3">
      <h2 className="py-3">Współpraca</h2>
      <p>Szukasz stałej opieki trenerskiej? Pojedynczej sesji treningowej? Może interesuje Cię współpraca online?</p>
      <p>Jeżeli masz jakiekolwiek pytanie dotyczące naszej współpracy, koniecznie <Link to="/training"  className="growth-style"><strong>napisz do mnie</strong></Link>. Z chęcia rozwieję Twoje wątpliwości.</p>
      <CooperationCards />
    </div>
  )
}

export default Cooperation