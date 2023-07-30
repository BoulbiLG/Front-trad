import React, { useState } from 'react';
import axios from 'axios';

const Image = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = async () => {
    try {
      if (!selectedImage) {
        alert('Veuillez sélectionner une image.');
        return;
      }

      const formData = new FormData();
      formData.append('image', selectedImage);

      const response = await axios.post('https://apipython2.onrender.com/enregistrerImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);

      alert('Image envoyée avec succès !');
    } catch (error) {
      console.error('Une erreur est survenue lors de l\'envoi de l\'image :', error);
      alert('Une erreur est survenue lors de l\'envoi de l\'image.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Envoyer l'image</button>
    </div>
  );
};

export default Image;