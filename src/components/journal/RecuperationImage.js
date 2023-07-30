import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const RecuperationImage = () => {
    const imageId = "64c4daa2629adc2282178ff1"
  const [imageData, setImageData] = useState(null);

  const fetchImage = useCallback(async () => { // Utilisation de useCallback
    try {
      const response = await axios.get(`https://apipython2.onrender.com/recupererImage?imageId=${imageId}`, {
        responseType: 'arraybuffer',
      });

      const blob = new Blob([response.data], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);

      setImageData(imageUrl);
    } catch (error) {
      console.error(error);
    }
  }, [imageId]); // Ajoutez imageId comme dépendance ici

  useEffect(() => {
    fetchImage();
  }, [fetchImage]); // Utilisation de fetchImage comme dépendance

  return (
    <div>
      {imageData && <img src={imageData} alt="" />}
    </div>
  );
};

export default RecuperationImage;
