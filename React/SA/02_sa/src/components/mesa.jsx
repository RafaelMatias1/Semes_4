import React, { useState, useEffect } from 'react';
import './mesa.css';
import imagem_combo from './imagem/combo.png'
import imagem_combo2 from './imagem/combo02.png'
import imagem_combo3 from './imagem/combo03.png'

function mesa () {

  const funcaoBotao = () => {
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (  
    <div className='container'>
      <div className='esquerda'>
        <button onClick={funcaoBotao} className='botao'>Menu</button>
        <button onClick={funcaoBotao} className='botao'>Combos</button>
        <button onClick={funcaoBotao} className='botao'>Comanda</button>
      </div>
      <div className='direita'>

        <div className="carousel-container">
          <div className="carousel-slide" style={{ display: index === 0 ? 'block' : 'none' }}>
            <img src={imagem_combo} className='imagem_cafe' alt="Combo 1" /> 
          </div>
          <div className="carousel-slide" style={{ display: index === 1 ? 'block' : 'none' }}>
            <img src={imagem_combo2} className='imagem_cafe' alt="Combo 2" /> 
          </div>
          <div className="carousel-slide" style={{ display: index === 2 ? 'block' : 'none' }}>
            <img src={imagem_combo3} className='imagem_cafe' alt="Combo 3" /> 
          </div>
        </div>

      </div>
    </div>
  )
}

export default mesa;