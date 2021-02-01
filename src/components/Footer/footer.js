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
          <p className="question mb-0">Gdzie odbywają się treningi typu outdoor?</p>
          <p className="answer">Gdynia Redłowo</p>
        </div>
      </div>

      <div className="container col-4 d-flex justify-content-center">
        <div>
          <p>developed by <a href="https://github.com/jchabrowski" target="_blank" rel="noreferrer" className="stealth-style">jchabrowski</a></p>
          <p className="mb-0">Jesteś trenerem? Chciałbyś mieć taką stronę?</p>
          <p><Link to="/info/" className="stealth-style">Napisz do mnie</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Footer;