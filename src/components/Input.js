import React, { useState } from 'react';
import '../css/Input.css';

function Input ({childToParent}) {

  //Pruebas

  
  const [texto, setTexto] = useState('');
  
  let textoArray
  let resultado = 'prueba de datos'
  const input = document.getElementById('input')
  const limpiarCampo = () => {
    input.value = ''
  }

  function encriptador(){
    textoArray = texto.split('');

    for(var contador = 0; contador < textoArray.length; contador++){
      if(textoArray[contador] === "a"){
          textoArray[contador] = "ai"
      } else if (textoArray[contador] === "e"){
          textoArray[contador] = "enter"
      } else if (textoArray[contador] === "i"){
          textoArray[contador] = "imes"
      } else if (textoArray[contador] === "o"){
          textoArray[contador] = "ober"
      } else if (textoArray[contador] === "u"){
          textoArray[contador] = "ufat"
      }
    };

    resultado = textoArray.toString().replace(/,/g, '');
    limpiarCampo()
    return resultado;
  };

  function desencriptador (){
    resultado = texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    limpiarCampo()
    return resultado
  }

  return(
    <section className='encriptador'>
        <textarea placeholder="Ingrese un texto" id='input' onChange={event => setTexto(event.target.value)} />
        <p>Solo letras minúsculas y sin tildes!</p>    
        <div className='contenedor-btn'>
          <button type="button" className='btn encriptar' onClick={() => childToParent(encriptador)}>Encriptar</button>
          <button type="button" className='btn desencriptar' onClick={() => childToParent(desencriptador)}>Desencriptar</button>
        </div>
    </section>
  )
};

export default Input;