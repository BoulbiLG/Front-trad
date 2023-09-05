import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../inputComposant/Button';
import '../../../css/journal/recuperationImageJournal.css';
import { useGlobalImage } from '../../../variableGlobal/variableImage';

const RecuperationImageJournal = ({ imageIds }) => {

    // RAFFRAICHISSEMENT AUTO
    const { globalImage, setGlobalImage } = useGlobalImage();

    const [imageURLs, setImageURLs] = useState([]);
    const [imageIdsFromAPI, setImageIdsFromAPI] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const imagePromises = imageIds.map(async (imageId) => {
                    if (imageId != null && imageId != undefined && imageId != "" ) {
                        const response = await axios.get(`https://apipython2.onrender.com/recuperationImage?imageId=${imageId}`, {
                            responseType: 'arraybuffer',
                        });
        
                        const imageUrl = URL.createObjectURL(new Blob([response.data], { type: 'image/jpeg' }));
            
                        const additionalInfoResponse = await axios.get(`https://apipython2.onrender.com/recuperationDonneeImage?imageId=${imageId}`);
                        const additionalInfo = additionalInfoResponse.data;
            
                        const idsFromAPI = response.headers['image_id'];
                        if (idsFromAPI) {
                            setImageIdsFromAPI(idsFromAPI.split(','));
                        }
            
                        return {
                            imageUrl,
                            additionalInfo
                        };
                    }
                });
        
                const imagesWithInfo = await Promise.all(imagePromises);
                setImageURLs(imagesWithInfo);
        
            } catch (error) {
                console.error('erreur recuperation des images :', error);
            }
        };
    }, [globalImage]);

    const suppressionImage = async (imageId) => {
        try {
            if (imageId != null && imageId != undefined && imageId != "" ) {
                const response = await axios.delete(`https://apipython2.onrender.com/suppressionImage?id=${imageId}`);
                console.log('Image supprimée avec succès:', response.data);
                
                const updatedImageURLs = imageURLs.filter(imageInfo =>
                    !imageInfo.additionalInfo.image_ids.includes(imageId)
                );
                setImageURLs(updatedImageURLs);
                let randomVariable = Math.random();
                setGlobalImage(randomVariable);
                console.log(globalImage);
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
        setSelectedImageIndex(index);
    };

    return (
        <div className='conteneurImage'>
            {imageURLs.map((imageInfo, index) => (
                <div key={index}>
                    <div className="imagePetit">
                        <img
                            className='imagePetiteImg'
                            src={`${imageInfo.imageUrl}`}
                            alt=""
                            onClick={() => handleImageClick(index)}
                        />
                        <Button
                            label='Supprimer'
                            onClick={() => suppressionImage(imageInfo.additionalInfo.image_ids[index])}
                        />
                    </div>
                    {selectedImageIndex !== null && (
                        <div className="imageGrandeConteneur">
                            <div className="imageGrande">
                                <img
                                    className='imageGrandeImg'
                                    src={`${imageInfo.imageUrl}`}
                                    alt=""
                                />
                                <Button
                                    label='Fermer'
                                    onClick={() => setSelectedImageIndex(null)}
                                />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RecuperationImageJournal;