import React from 'react';
import NavBar from '../components/NavBar';
import '../css/home.css';
//import Titre from '../components/pageDeGarde/Titre';
import Test from '../components/Test';

const Home = () => {
  return (
  <div className="tout">
    <NavBar />
    <div className="titreGlobal">
        <Test />
    </div>
  </div>
  )
};

export default Home;
