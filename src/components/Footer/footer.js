import React from 'react';
import './footer.css'
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div className="container col-12 d-flex justify-content-center align-items-center footer py-4">
      <div className="container col-4 d-flex justify-content-center">
        <div>
          <p className="question mb-0">Gdzie trenuję?</p>
          <p className="answer">W Gdyni i Gdańsku.</p>
          <p className="question mb-0">Czy mogę zadać pytanie, bez zobowiązań treningowych?</p>
          <p className="answer">Oczywiście.</p>
        </div>
      </div>

      <div className="container col-4 d-flex justify-content-center">
        <div>
          <p>developed by <Link to="https://github.com/jchabrowski" target="_blank" className="stealth-style">jchabrowski</Link></p>
          <p>Jesteś trenerem? Chciałbyś mieć taką stronę?</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;