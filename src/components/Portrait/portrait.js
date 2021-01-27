import React from 'react' ;
import './Portrait.css';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import '../../styles/all.css';

const Portrait = () => (
  <>
    <div className="container portrait">
    </div>
    <div className="info">
      <h3>Moim celem jest <span className="growth-darker"> zadbanie o Twoje zdrowie</span></h3>
      <AnchorLink to="/#about-me"><button className="btn-lg btn-jumbo my-2">Dowiedz się więcej</button></AnchorLink>
    </div>
  </>
);

export default Portrait
