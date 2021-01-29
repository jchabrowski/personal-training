import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Faq from "../components/FAQ/faq";
import ContactForm from '../components/Contact/contact';
import Footer from "../components/Footer/footer";

  const Info = () => {
    return (
      <>
        <Layout>
          <SEO title="Informacje | Jakub Chabrowski"/>
          <div className="container py-5"></div>
          <ContactForm />
          <Faq />
        </Layout>
        <Footer />
      </>
    )
  }

export default Info