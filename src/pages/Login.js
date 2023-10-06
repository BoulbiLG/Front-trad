import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/logo.png';
import logoGoogle from '../Assets/logoGoogle.png';
import '../css/login/login.css';

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({email: '',password: ''});

  const handleChange = (e) => {setUserData({...userData,[e.target.name]: e.target.value});};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://apipython2.onrender.com/login', {email: userData.email,password: userData.password});

      const { token, userId, user_data } = response.data;
      localStorage.setItem('authToken', token);

      sessionStorage.setItem('username', user_data.username);
      sessionStorage.setItem('email', user_data.email);
      sessionStorage.setItem('auth', 'true');

      navigate('/profil');
    } catch (error) {
      console.log('Error:', error);
      setError('Erreur de connexion. Veuillez vérifier vos informations.');
    }
  };

  const [error, setError] = useState(null);

  return (
    <div className="loginConteneur">
      <img src={logo} alt="" className='logo'/>
      <div className="secondConteneur">
        <div className='gauche'>
          <div className="contenu-form">
            <div className="titre">
              <h1>Welcom Back</h1>
            </div>
            <div className="paragraphe">
              <p>Welcome back ! Please enter your details.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Enter your mail</label>
                <input type="email" name="email" onChange={handleChange} placeholder="votreadresseemail@gmail.com" required id='email' />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} placeholder="********" required id='password' />
              </div>
              <div className="passwordForgot">
                <div className="case">
                  <input type="checkbox" />
                  <p>Remember for 30 days</p>
                </div>
                <p className='forgot'>Forgot Password</p>
              </div>
              <button className='bouton' type="submit">Se connecter</button>
              <button className='signWithGoogle' type="submit">
                  <img src={logoGoogle} alt="" />
                  <p>Sign in with Google</p>
              </button>
              <div className="pasDeCompte">
                <p>Don't have an account ?</p>
                <Link className='lien' to="/register">Sign Up</Link>
              </div>
            </form>
            {error && <errorMsg title="Pas bon" />} {<errorMsg title="pas bon"/>}
          </div>
        </div>
        <div className="droite">

        </div>
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
