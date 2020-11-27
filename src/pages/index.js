import React from "react";
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";
import SEO from "../components/seo";
import anthonySquare from '../images/anthony-kwadrat.jpg';
import jakubSquare from '../images/jakub-profil2.jpg';



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

    <div className="container d-flex pt-3">
      <div className="container mr-0 px-4 col-sm-12 col-md-6">
        <h2>O mnie</h2>
        <p>Jestem magistrem fizjoterapii AWFiS Gdańsk, trenerem personalnym z wieloletnim doświadczeniem, pasjonatem układu ruchu człowieka i kinezjologii.</p>
        <p>W pracy z klientami priorytetem jest dla mnie nauczenie fundamentalnych wzorców ruchowych, umożliwiających bezpieczne:</p>
        <ul>
          <li>Doskonalenie sprawności ruchowej</li>
          <li>Zwiększenie siły maksymalnej</li>
          <li>Rekompozycję składu masy ciała</li>
          <li>Przygotowanie motoryczne i prewencję kontuzji</li>
          <li>Osiągnięcie Twoich indywidualnych celów sylwetkowych</li>
        </ul>
      </div>
      <div className="container pl-0 ml-0 col-sm-12 col-md-6">
        <img src={jakubSquare} alt="anthony" className="barbell-img mb-zero"/>
      </div>
    </div>

    <div className="container d-flex mb-3">
        <div className="container mr-0 pr-0 col-sm-12 col-md-6">
          <img src={anthonySquare} alt="anthony" className="barbell-img"/>
        </div>
        <div className="container px-4 pt-2 ml-0 col-sm-12 col-md-6">
          <h2>Trening personalny</h2>
          <p>Na naszej pierwszej konsultacji przeprowadzę z Tobą wywiad i trening, po czym dobiorę najefektywniejszy plan działania. Możemy następnie zacząć trenować na odpowiadającej Tobie siłowni na terenie trójmiasta.</p>
          <p>Treningi prowadzę w największych obiektach na terenie Gdyni i Gdańska. <Link to="/"><strong>Napisz do mnie</strong></Link> aby uzyskać więcej informacji i ustalić miejsce naszego spotkania.</p>
          <h2>Treningi w dobie epidemii</h2>
          <p>Współpraca z klientami jest dostosowywana do aktualnych zaleceń sanitarno-epidemiologicznych, obowiązujących na terenie województwa Pomorskiego.</p>
          <p>Spotkajmy się na świeżym powietrzu, bądź zainteresuj się współpracą online!</p>
        </div>
      </div>

      <div className="container d-flex flex-column px-4 mx-auto my-5">
        <h3 className="heading">Współpraca</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reprehenderit modi maiores asperiores totam animi aspernatur vitae, dolores unde ratione laudantium tempora accusamus quam vel officia, id nihil, facere dolor.</p>
      
        <div className="card-deck px-auto mx-auto col-md-12 py-3">
          <div className="card pose-hold">
            <div className="card-body">
              <h4 className="card-title">Trening Personalny</h4>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button className="btn-lg btn-transparent">POZNAJ SZCZEGÓŁY</button>
            </div>
          </div>
          <div className="card pose-front">
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
          <div className="card pose-pull">
            <div className="card-body">
              <h4 className="card-title">Współpraca online</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <button className="btn-lg btn-transparent">DOWIEDZ SIĘ WIĘCEJ</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 px-4">
        <h3 className="heading">Media społecznościowe</h3>
        <p>Sprawdź w wolnej chwili</p>
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
