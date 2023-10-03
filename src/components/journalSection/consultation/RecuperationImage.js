import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../inputComposant/Button';
import '../../../css/journal/recuperationImage.css';
import { useGlobalContext } from '../../../variableGlobal/variableGlobal';
import { useGlobalImage } from '../../../variableGlobal/variableImage';

const ImageDisplay = ({ imageIds }) => {

    const { globalImage, setGlobalImage } = useGlobalImage();
    const [imageURLs, setImageURLs] = useState([]);
    const [selectedImageIndexes, setSelectedImageIndexes] = useState([]);
    const [images, setImages] = useState([]);

    const fetchImages = () => {
        axios.get(`https://apipython2.onrender.com/recuperationImage?imageId=${imageIds}`)
        .then((response) => {
            setImages(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Erreur lors de la récupération des images :', error);
        });
    }
    
    const suppressionImage = async (imageId) => {
        try {
            if (imageId !== null && imageId !== undefined && imageId !== "") {
                const response = await axios.delete(`https://apipython2.onrender.com/suppressionImage?id=${imageId}`);
                console.log('Image supprimée avec succès:', response.data);
                
                setImages(images.filter(image => image.imageID !== imageId));
    
                let randomVariable = Math.random();
                setGlobalImage(randomVariable);
                return response.data;
            }
        } catch (error) {
            console.error('Une erreur est survenue lors de la suppression de l\'élément :', error);
            if (error.response) {
                console.error('Réponse de l\'API:', error.response.data);
            }
            throw error;
        }
    };

    const handleImageClick = (index) => {
        setSelectedImageIndexes([...selectedImageIndexes, index]);
    };

    useEffect(() => {
        fetchImages();
    }, [globalImage]);

    return (
        <div className='conteneurImage'>
            {images.map((image, index) => (
                <div key={image.image_id}>
                    <div className="imagePetit">
                        <img className='imagePetiteImg' src={`data:image/jpeg;base64,${image.image_data}`} alt="" onClick={() => handleImageClick(index)} />
                    </div>
                    {selectedImageIndexes.includes(index) && (
                        <div className="imageGrandeConteneur">
                            <div className="imageGrande">
                                <img className='imageGrandeImg' src={`data:image/jpeg;base64,${image.image_data}`} alt="" />
                                <Button label='Fermer' onClick={() => setSelectedImageIndexes(selectedImageIndexes.filter(selectedIndex => selectedIndex !== index))} />
                            </div>
                        </div>
                    )}
                </div>
            ))}
            {images == undefined || images.length < 1 ? (
                <p>Aucune image disponible.</p>
            ) : null}
        </div>
    );
};

export default ImageDisplay;