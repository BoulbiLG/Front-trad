import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import '../css/register.css';

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
    <div className="tout">
      <NavBar />
      <div className="contenu-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Votre nom</label>
            <input type="text" name="username" onChange={handleChange} placeholder="votrenom" required id='username'/>
          </div>
          <div>
            <label htmlFor="email">Votre E-mail</label>
            <input type="email" name="email" onChange={handleChange} placeholder="votreadresseemail@gmail.com" required id='email'/>
          </div>
          <div>
            <label htmlFor="password">Votre mot de passe</label>
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
          <Link className='lien' to="/login">J'ai déjà un compte</Link>
          <button className='bouton' type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
