import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Training from '../components/Training/personal-training';
import ContactForm from '../components/Contact/contact';
import Footer from "../components/Footer/footer";

  const About = () => {
    return (
      <>
        <Layout>
          <SEO title="O mnie | Jakub Chabrowski"/>
          <Training />
          <ContactForm />
        </Layout>
        <Footer />
      </>
    )
  }

export default About