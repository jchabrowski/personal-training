import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutMe from '../components/About/about-me';
import ContactForm from '../components/Contact/contact';
import Footer from "../components/Footer/footer";

  const About = () => {
    return (
      <>
        <Layout>
          <SEO title="O mnie | Jakub Chabrowski"/>
          <AboutMe />
          <ContactForm />
        </Layout>
        <Footer />
      </>
    )
  }

export default About