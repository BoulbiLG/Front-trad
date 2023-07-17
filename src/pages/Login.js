import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import '../css/login.css';

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://trad-back.onrender.com/api/auth/login', {
        email: userData.email,
        password: userData.password
      });

      const { token, userId } = response.data;
      localStorage.setItem('authToken', token);
      //console.log('User ID:', userId);
      //console.log('Token:', token);

      const userResponse = await axios.get(`https://trad-back.onrender.com/api/auth/getUser/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(userResponse);

      //const user = userResponse.data.user;

      const userDataFromSession = getUserDataFromSession();
      const auth = getAuthFromSession();

      console.log("Session username:", userDataFromSession.username);
      console.log("Session email:", userDataFromSession.email);
      console.log("auth : " + auth);

      navigate('/profil');
    } catch (error) {
      console.log('Error:', error);
      setError('Erreur de connexion. Veuillez vérifier vos informations.');
    }
  };

  const [error, setError] = useState(null);

  return (
    <div className="tout">
      <NavBar />
      <div className="contenu-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Votre E-mail</label>
            <input type="email" name="email" onChange={handleChange} placeholder="votreadresseemail@gmail.com" required id='email' />
          </div>
          <div>
            <label htmlFor="password">Votre mot de passe</label>
            <input type="password" name="password" onChange={handleChange} placeholder="********" required id='password' />
          </div>
          <Link className='lien' to="/register">Je n'ai pas de compte</Link>
          <button className='bouton' type="submit">Se connecter</button>
        </form>
        {error && <errorMsg title="Pas bon" />} {<errorMsg title="pas bon"/>}
      </div>
    </div>
  );
};

const setAuthAndUserDataInSession = (user) => {
  sessionStorage.setItem('auth', 'true');
  sessionStorage.setItem('userData', JSON.stringify(user));
};

const getUserDataFromSession = () => {
  const userData = sessionStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};

const getAuthFromSession = () => {
  return sessionStorage.getItem('auth');
};

export { setAuthAndUserDataInSession, getUserDataFromSession, getAuthFromSession };

export default Login;
