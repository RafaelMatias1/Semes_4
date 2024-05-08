import React, { useState, useEffect } from 'react';
import './login.css';


function login () {

    const entrar = () => {

        alert("Entrou")
    
    };
    const criar = () => {

        alert("Crie uma nova senha")
    
    };

  return (  
    <div className='container'>
      <div className='meio'>
        <div className='m_cima'>
            <div className='c_cima'>
                Bem-Vindo
            </div>
            <div className='c_baixo'>
                ao sistema Agil
            </div>
        </div>
        <div className='m_meio'>
            <input className='inputs' placeholder='Senha' />
            <input className='inputs' placeholder='Usuário' />
        </div>
        <div className='m_baixo'>
            <button onClick={entrar} className='botao'>ENTRAR</button>
            <a onClick={criar} className='esqueceu'>Esqueceu sua senha?</a>
        </div>
      </div>
    </div>
  )
}

export default login;