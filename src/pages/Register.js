import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/logo.png';
import logoGoogle from '../Assets/logoGoogle.png';
import '../css/register/register.css';

//création du composant
const Register = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    nom: '',
    email: '',
    mdp: ''
  });

  const [acceptsTerms, setAcceptsTerms] = useState(false);

  //fonction qui s'execute à chaques caractères rentrés dans un champs
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  //fonction qui s'execute à l'envoie du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptsTerms) {
      alert("Veuillez accepter les conditions d'utilisation");
      return;
    }
    try {
      const response = await axios.post('https://apipython2.onrender.com/signup', userData); // Assurez-vous d'utiliser la bonne URL de l'API pour l'inscription
  
      console.log(response.data.message);
      navigate("/login");
      // Effectuer d'autres actions après une inscription réussie
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  return (
    <div className="registerContenu">
      <img src={logo} alt="" className='logo'/>
      <div className="secondConteneur">
        <div className='gauche'>
          <div className="contenu-form">
            <div className="titre">
              <h1>Sign Up</h1>
            </div>
            <div className="paragraphe">
              <p>Start journaling your trades today</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Name*</label>
                <input type="text" name="username" onChange={handleChange} placeholder="Enter your name" required id='username'/>
              </div>
              <div>
                <label htmlFor="email">E-mail*</label>
                <input type="email" name="email" onChange={handleChange} placeholder="Enter your email" required id='email'/>
              </div>
              <div>
                <label htmlFor="password">Password*</label>
                <input type="password" name="password" onChange={handleChange} placeholder="********" required id='password'/>
              </div>
              <label className='checkbox'>
                <input
                  type="checkbox"
                  checked={acceptsTerms}
                  onChange={e => setAcceptsTerms(e.target.checked)}
                />
                J'accepte les conditions d'utilisation
              </label>
              <button className='bouton' type="submit">S'inscrire</button>
              <button className='signWithGoogle' type="submit">
                  <img src={logoGoogle} alt="" />
                  <p>Sign in with Google</p>
              </button>
              <div className="pasDeCompte">
                <p>Already have an account ?</p>
                <Link className='lien' to="/login">Log In</Link>
              </div>
            </form>
            </div>
        </div>
        <div className="droite">

        </div>
      </div>
    </div>
  );
};

export default Register;
