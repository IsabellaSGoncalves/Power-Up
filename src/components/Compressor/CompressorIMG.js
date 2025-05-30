import React, { useState } from "react";
import useImagemCompressor from "../../hooks/useCompressor";
import "./Compressor.css";

function CompressorIMG() {
    const { imgCompressada, handleImageChange } = useImagemCompressor();
    const [popupVisivel, setPopupVisivel] = useState(false);

    return (
        <div className="container-img-c">
            <p className="p-c">Comprimir imagem para envio ao instrutor: </p>
            <label htmlFor='imagemArquivo' className="button-input-c">Selecionar Imagem</label>
            <input id='imagemArquivo' type="file" accept="image/*" onChange={handleImageChange} required/>
            
            {imgCompressada && (
                <>
                    <p className="p-c">Imagem Comprimida:</p>
                    <img
                        src={imgCompressada}
                        alt="Imagem comprimida"
                        className="thumb-img"
                        onClick={() => setPopupVisivel(true)}
                    />
                </>
            )}

            {popupVisivel && (
                <div className="popup-backdrop" onClick={() => setPopupVisivel(false)}>
                    <div className="popup-img-container" onClick={(e) => e.stopPropagation()}>
                        <img src={imgCompressada} alt="Imagem comprimida" />
                        <button onClick={() => setPopupVisivel(false)}>Anexar Imagem</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CompressorIMG;
