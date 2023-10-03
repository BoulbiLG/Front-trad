import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Lolll = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
    axios.get('https://apipython2.onrender.com/recuperationImage?imageId=64ed27bf7f1543b494e045d3')
        .then((response) => {
        setImages(response.data);
        })
        .catch((error) => {
        console.error('Erreur lors de la récupération des images :', error);
        });
    }, []);

    return (
        <div>
          {images.map((image) => (
            <div key={image.image_id}>
              <img src={`data:image/jpeg;base64,${image.image_data}`} alt="" />
              <p>ID de l'image : {image.image_id}</p>
            </div>
          ))}
        </div>
    );
      
}

export default Lolll