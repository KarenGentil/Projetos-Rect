import './Galeria.css'

import React, { useState } from 'react';



function GaleriaImagens(){


    const [imagens, setImagens] = useState([
        'https://liderdamatilha.fbitsstatic.net/media/yorkshire-mobile-80-1.jpg',
        'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2023/07/14/3337412-yorkshire-terrier.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbya2PtrOMEPbMSl2YEEX3vEblPyUYz2spbg&s'
    ])

    const adicionarImagem = () => {
        setImagens([...imagens, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEKV9quZZYBIbz6vKe4yQ6FI62HjoiUPv0hw&s'])
    }                               

        return(
            <div>
            
            
            <h2>Galeria de Imagens</h2>
            
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                {imagens.map((imagem, index) => (
                <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '5px', width:'200px'}} />
             ))}
                
            </div>
             <button onClick={adicionarImagem} style={{ marginTop: '10px' }}>Adicionar Imagem</button>
            </div>
        )
}

export default GaleriaImagens