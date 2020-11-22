import React from "react";
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from 'gatsby-image';
import barbell from '../images/barbell.jpg'


const IndexPage = () => (
  <Layout>
    <SEO title="Trening" />
    <div className="container portrait">
      <div>
        <h2>Jakub Chabrowski</h2>
        <h3>Moim celem jest zadbanie o Twoje zdrowie</h3>
        <button className="btn btn-primary btn-lg btn-jumbo" href="#">Dowiedz się więcej</button>
      </div>
    </div>

    <div className="container d-flex">
      <div className="container mr-0 px-auto col-sm-12 col-md-6">
        <h4>O mnie</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis doloremque deleniti optio numquam, quia cupiditate vel aperiam. Rerum ipsam alias quam, corrupti neque sint commodi? Ullam explicabo consequatur molestias perspiciatis?</p>
      </div>
      <div className="container barbell-img pl-0 ml-0 col-sm-12 col-md-6">
        <p className="lead">image will be over here</p>
      </div>
    </div>

    <div className="container d-flex mb-3">
        <div className="container barbell-img mr-0 pr-0 col-sm-12 col-md-6">
          <p className="lead">image placeholder</p>
        </div>
        <div className="container pl-3 pt-2 ml-0 col-sm-12 col-md-6">
          <h4>Trening personalny</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia sequi distinctio ut vel. Saepe veritatis quos expedita eligendi explicabo accusantium praesentium, ex nemo nostrum veniam illo ad. Neque, ad!</p>
        </div>
      </div>

      <div className="container d-flex flex-column px-4 mx-auto my-5">
        <h3 className="heading">Współpraca</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reprehenderit modi maiores asperiores totam animi aspernatur vitae, dolores unde ratione laudantium tempora accusamus quam vel officia, id nihil, facere dolor.</p>
      
        <div className="card-deck px-auto mx-auto col-md-12 py-3">
          <div className="card lake">
            <div className="card-body">
              <h4 className="card-title">Trening Personalny</h4>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button className="btn-lg btn-transparent">POZNAJ SZCZEGÓŁY</button>
            </div>
          </div>
          <div className="card lake">
            <div className="card-body">
              <h4 className="card-title">Pierwsza konsultacja</h4>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
              <button className="btn-lg btn-transparent">POZNAJ SZCZEGÓŁY</button>
            </div>
          </div>
          <div className="card lake">
            <div className="card-body">
              <h4 className="card-title">Współpraca online</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <button className="btn-lg btn-transparent">DOWIEDZ SIĘ WIĘCEJ</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-5 px-4">
        <h3 className="heading">Skontaktuj się ze mną</h3>
        <form>
          <row className="d-flex py-3">
            <div className="form-group col-md-6">
              <label for="name-surname">Imię i nazwisko</label>
              <input type="name" className="form-control" id="name-surname" placeholder="Imię i nazwisko"/>
            </div>
            <div className="form-group col-md-6">
              <label for="email">email</label>
              <input type="email" className="form-control" id="nemail" placeholder="Wprowadź swój adres email"/>
            </div>
          </row>
            <div className="container form-group col-md-12 d-flex flex-column justify-content-center">
              <label for="message">Twoja wiadomość</label>
              <textarea className="form-control" id="message" rows="4" placeholder="W czym mogę Ci pomóc?"></textarea>
              <button className="btn-form">Wyślij</button>
            </div>
        </form>
      </div>

      
    <Link to="/about/">About me</Link> <br />
  </Layout>
)

export default IndexPage
