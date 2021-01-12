import React from 'react';
// import '../../styles/all.css';
import '../FirstCard/firstCard.css'
import CooperationCards from './cooperation-cards';


const Cooperation = () => {
  return (
    <div className="container frame d-flex flex-column px-4 mx-auto my-3">
      <h3 className="heading py-3">Współpraca</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reprehenderit modi maiores asperiores totam animi aspernatur vitae, dolores unde ratione laudantium tempora accusamus quam vel officia, id nihil, facere dolor.</p>
      <CooperationCards />
    </div>
  )
}

export default Cooperation