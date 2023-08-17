import React, { useEffect, useState } from 'react';
import Selector from '../Selector';
import { meilleurOptions } from './Options';
import axios from 'axios';

const Meilleur = ({ collection }) => {

    let collectionArgument = collection
    console.log(collection);

    const [meilleurValue, setMeilleurValue] = useState(meilleurOptions[0].value);
    const [responseData, setResponseData] = useState([]);

    const username = sessionStorage.getItem('username');

    console.log(meilleurValue);

    useEffect(() => {
        axios.get(`https://apipython2.onrender.com/best?meilleur=${meilleurValue}&username=${username}&collection=${collectionArgument}`)
            .then((response) => {
                setResponseData(response.data);
            })
            .catch((error) => {
                console.error('Une erreur est survenue lors de la requête GET :', error);
            });
    }, [meilleurValue, username, collectionArgument]);

    return (
        <div className='contenuMeilleur'>
            <h3>Les meilleurs</h3>
            <Selector options={meilleurOptions} value={meilleurValue} onChange={(newValue) => {setMeilleurValue(newValue)}}/>
            <p>{responseData}</p>
        </div>
    );
}

export default Meilleur;
