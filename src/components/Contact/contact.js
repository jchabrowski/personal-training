import React from 'react';
import './contact.css'

const ContactForm = () => {
  return (
    <div className="container frame contact py-3 mt-3 px-4" id="contact">
      <h2 className="py-3">Skontaktuj się ze mną</h2>
      <form>
        <row className="d-flex py-3">
          <div className="form-group col-md-6">
            {/* <label for="name-surname">Imię i nazwisko</label> */}
            <input type="name" className="form-control" id="name-surname" placeholder="Imię i nazwisko"/>
          </div>
          <div className="form-group col-md-6">
            {/* <label for="email">email</label> */}
            <input type="email" className="form-control" id="email" placeholder="Wprowadź swój adres email"/>
          </div>
        </row>
          <div className="container form-group col-md-12 d-flex flex-column justify-content-center">
            {/* <label for="message">Twoja wiadomość</label> */}
            <textarea className="form-control" id="message" rows="4" placeholder="W czym mogę Ci pomóc?"></textarea>
            <button className="btn-form">Wyślij</button>
          </div>
      </form>
    </div>
    )
  }

  export default ContactForm;