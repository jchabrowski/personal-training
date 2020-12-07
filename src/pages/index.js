import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Portrait from '../components/Portrait/portrait';
import FirstCard from '../components/FirstCard/firstCard';
import SecondCard from "../components/SecondCard/secondCard";
import Cooperation from "../components/Cooperation/cooperation";
import ContactForm from '../components/Contact/contact';
import InstagramFeed from "../components/InstagramFeed/instagramFeed";
import Footer from "../components/Footer/footer";

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Trener Personalny Gdynia" />
      <Portrait />
      <FirstCard />
      <SecondCard />
      <Cooperation /> 
      <InstagramFeed />
      <ContactForm />
    </Layout>
    <Footer />
  </>
)

export default IndexPage
