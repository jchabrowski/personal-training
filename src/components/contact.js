import React from 'react';

const ContactForm = () => {
  return (
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
    )
  }

  export default ContactForm;