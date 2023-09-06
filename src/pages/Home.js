import React from 'react';
import NavBar from '../components/NavBar';
import '../css/home.css';
import Titre from '../components/pageDeGarde/Titre';

const Home = () => {
  return (
  <div className="tout">
    <NavBar />
    <div className="titreGlobal">
        <Titre />
    </div>
  </div>
  )
};

export default Home;
