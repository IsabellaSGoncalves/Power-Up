import { useState } from 'react';

function useImagemCompressor() {
    const [imgCompressada, setImgCompressada] = useState(null);

    const handleImageChange = (event) => {
        const arquivo = event.target.files[0];
        if (arquivo) {
            comprimirImg(arquivo);
        }
    };

    const comprimirImg = (arquivoIMG) => {
        const leitor = new FileReader();
        leitor.readAsDataURL(arquivoIMG);

        leitor.onload = (event) => {
            const imagem = new Image(); 
            imagem.src = event.target.result;

            imagem.onload = () => {
                const canvas = document.createElement('canvas');
                const contexto = canvas.getContext('2d');
                canvas.width = 500;
                canvas.height = 500;

                contexto.drawImage(imagem, 0, 0, canvas.width, canvas.height);
                const dataURL = canvas.toDataURL('image/jpeg', 0.7);
                setImgCompressada(dataURL);
            };
        };
    };

    return {
        imgCompressada,
        handleImageChange,
    };
}

export default useImagemCompressor;
