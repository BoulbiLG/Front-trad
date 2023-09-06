import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navBar.css';

const NavBar = () => {
  const isAuthenticated = sessionStorage.getItem('auth') === 'true';
  const userDataFromSession = JSON.parse(sessionStorage.getItem('userData'));
  const userId = userDataFromSession ? userDataFromSession._id : null;
  //console.log("userID : " + userId);

  return (
    <nav>
      <Link className='onglet simple' to="/"><img src="" alt="" />Logo</Link>
      <div className="navigation">
        <Link className='onglet simple' to="/">Home</Link>
        <Link className='onglet simple' to="/">Pricing</Link>
        <Link className='onglet simple' to="/">Blog</Link>
        <Link className='onglet simple' to="/">Support</Link>
        {!isAuthenticated && (
          <Link className='onglet login' to="/login">Se connecter</Link>
        )}
        {isAuthenticated && (
          <Link className='onglet login' to="profil">Mon profil</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
