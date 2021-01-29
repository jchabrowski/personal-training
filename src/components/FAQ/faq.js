import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './faq.css';

const Faq = () => {
  return (
    <div className="container frame py-5 mt-3 px-4">
      <h2 className="py-2">Najczęściej zadawane pytania</h2>
      <Accordion>
        <Card className="card-accordion">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            Czy możemy przyjść na trening we dwójkę?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Tak. Dopasuję stopień trudności do waszych możliwości. W przypadku treningów grupowych stawka ulega zmianie i zależy od liczby trenujących. W przypadku treningów kameralnych zalecam jednak uczestnictwo w nie więcej niż 2/3 osoby.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            Ile trwa trening?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Pierwsza konsultacja trwa około 90 minut. Standardowy trening trwa mniej więcej 60.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
            Co będzie mi potrzebne?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Strój sportowy, woda, ręcznik. Resztą zajmę się ja :)</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
            W jakie dni i o której godzinie możemy się spotkać?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Mój grafik zmienia się z tygodnia na tydzień. Napisz do mnie wiadomość aby ustalić dogodny termin treningu :)</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    )
  }

  export default Faq;