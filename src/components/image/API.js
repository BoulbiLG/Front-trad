import axios from 'axios';

export const handleImageUpload = async (selectedImage, idValue, collectionValue) => {
  try {
    if (!selectedImage) {
      alert('Veuillez sélectionner une image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('id', idValue.toString());
    formData.append('collection', collectionValue.toString());

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
