import React, { useState } from 'react';
import axios from 'axios';

export const handleImageUpload = async (selectedImage) => {
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

const Image = ({ onClick }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUploadLocal = () => {
    handleImageUpload(selectedImage);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={onClick || handleImageUploadLocal}>Envoyer l'image</button>
    </div>
  );
};

export default Image;
