import React from 'react';
import NavBar from '../components/NavBar';
import '../css/home.css';
import Titre from '../components/pageDeGarde/Titre';
import Presentation from '../components/pageDeGarde/Presentation';
import Review from '../components/pageDeGarde/Review';
import Question from '../components/pageDeGarde/question/Question';
import TakeControl from '../components/pageDeGarde/TakeControl';
import Footer from '../components/pageDeGarde/Footer';

const Home = () => {
  return (
  <div className="homePageTout">
    <NavBar />
    <div className="titreGlobal">
        <Titre />
        <Presentation />
        <Review />
        <Question />
        <TakeControl />
        <Footer />
    </div>
  </div>
  )
};

export default Home;
