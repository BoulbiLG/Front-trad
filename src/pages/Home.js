import React from 'react';
import NavBar from '../components/NavBar';
import '../css/home.css';
import Titre from '../components/pageDeGarde/Titre';
import Presentation from '../components/pageDeGarde/Presentation';
import Review from '../components/pageDeGarde/Review';
//import Test from '../components/Test';

const Home = () => {
  return (
  <div className="homePageTout">
    <NavBar />
    <div className="titreGlobal">
        <Titre />
        <Presentation />
        <Review />
    </div>
  </div>
  )
};

export default Home;
