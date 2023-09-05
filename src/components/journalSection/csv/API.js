import axios from "axios";

export const envoieCSV = async (selectedFile) => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('URL_DU_BACKEND', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console(response);
      } catch (error) {
        console.error('Erreur lors de l\'envoi du fichier :', error);
      }
    }
};