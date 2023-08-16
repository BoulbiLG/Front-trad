import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageDisplay = ({ imageId }) => {
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
        try {
            const response = await axios.get(`https://apipython2.onrender.com/recuperationImage?imageId=${imageId}`, {
            responseType: 'arraybuffer',
            });

            const blob = new Blob([response.data], { type: 'image/jpeg' });
            const imageUrl = URL.createObjectURL(blob);
            setImageURL(imageUrl);
        } catch (error) {
            console.error('Une erreur est survenue lors de la récupération de l\'image :', error);
        }
        };

        fetchImage();
    }, [imageId]);

    return (
        <div>
        {imageURL && <img src={imageURL} alt="" />}
        </div>
    );
};

export default ImageDisplay;
