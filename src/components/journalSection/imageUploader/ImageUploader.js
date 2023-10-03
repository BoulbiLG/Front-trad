import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../inputComposant/Button';
import '../../../css/journal/imageUploader.css';
import { useGlobalImage } from '../../../variableGlobal/variableImage';

const ImageUploader = ({ id, collection }) => {

  // RAFFRAICHISSEMENT AUTO
  const { globalImage, setGlobalImage } = useGlobalImage();

  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUploaderStatus, setImageUploaderStatus] = useState('');
  const [imageUploaderAffichage, setImageUploaderAffichage] = useState("cache"); // cache ou montre
  const afficherImageUploader = () => {setImageUploaderAffichage("affiche");};const masquerImageUploader = () => {setImageUploaderAffichage("cache");};
  
  const handleImageUpload = async (selectedImage) => {
    try {
      if (!selectedImage) {
        alert('Veuillez sélectionner une image.');
        return;
      }

      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('id', id.toString());
      formData.append('collection', collection.toString());

      const response = await axios.post('https://apipython2.onrender.com/enregistrerImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setImageUploaderStatus('Image envoyée avec succès !');
      let randomVariable = Math.random();
      setGlobalImage(randomVariable);
      console.log(globalImage);
    } catch (error) {
      console.error('Une erreur est survenue lors de l\'envoi de l\'image :', error);
      setImageUploaderStatus('Une erreur est survenue lors de l\'envoi de l\'image.');
    }
  };
  
  const handleUpload = () => {
    selectedImages.forEach((image) => {
      handleImageUpload(image);
    });
    setSelectedImages([]);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newSelectedImages = [...selectedImages];
  
    if (newSelectedImages.length + files.length > 3) {
      setImageUploaderStatus("Vous ne pouvez téléverser que 3 images.");
      return;
    }
  
    for (let i = 0; i < files.length; i++) {
      newSelectedImages.push(files[i]);
    }
  
    setSelectedImages(newSelectedImages);
    setImageUploaderStatus("");
  };

  const handleRemoveImage = (index) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages.splice(index, 1);
    setSelectedImages(newSelectedImages);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    const newSelectedImages = [...selectedImages];

    for (let i = 0; i < files.length; i++) {
      newSelectedImages.push(files[i]);
    }

    setSelectedImages(newSelectedImages);
    setImageUploaderStatus("");
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="ImageUploader">
        <Button label='Ajouter des images' onClick={afficherImageUploader}/>
        {imageUploaderAffichage === "affiche" ? (
        <div className="cadreImageUploader">
            <div className="contenuMontreImageUploader">
                <div className="divImageUploader">
                    <div className="upload-div"  onDrop={handleDrop} onDragOver={handleDragOver} onClick={() => document.getElementById('image-input').click()}>
                        <div className="placeholder">Cliquer pour ajouter des images</div>
                        <input id="image-input" type="file" multiple hidden onChange={handleFileChange} />
                    </div>
                </div>
                {selectedImages.map((image, index) => (
                    <div key={index} className="imagePreview">
                        <div className="imageDetails">
                            <p>Nom du fichier: {image.name}</p>
                            <p>Taille du fichier: {image.size} octets</p>
                            <button onClick={() => handleRemoveImage(index)}>Supprimer</button>
                        </div>
                    </div>
                ))}
                <div className="basImageUploader">
                    {selectedImages.length > 0 && (
                        <Button label='Enregistrer les images' className="upload-button" onClick={handleUpload}/>
                    )}
                    <Button label='Annuler' onClick={masquerImageUploader}/>
                    <p>{imageUploaderStatus}</p>
                </div>
            </div>
        </div>
        ) : null }
    </div>
  );
};

export default ImageUploader;
