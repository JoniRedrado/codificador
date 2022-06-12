import React from "react";
import Muneco from '../img/muneco.png';
import '../css/Resultado.css';

function Resultado ({resultado}){
  const output = document.getElementById('output')
  
  let copy = () => {
    output.select()
    document.execCommand('copy');
    //output.value = '';
    
  }
  
  if (resultado === ""){
    return(
      <section className="resultado">
        <img  src={Muneco}
              alt="imagen" />
        <p id="p-principal">Lamentablemente, no hemos detectado ningún mensaje.</p>
        <p id="p-secundario">Ingresa el texto que deseas encriptar/desencriptar</p>
      </section>)
      }
  
  else {
    return(
      <section className="resultado" id="result">
        <textarea value={resultado} id="output"/>
        <button onClick={copy}>Copiar</button>
      </section>
    )
  }
};


export default Resultado;