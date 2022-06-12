import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Resultado from './components/Resultado';

function App() {
  
  //Pruebas
  const [data, setData] = useState('');
  const childToParent = (childdata) => {
    setData(childdata)
  };



  return (
    <div className="App">
      <Header />
      <div className='contenedor'>
        <Input childToParent={childToParent}/>
        <Resultado resultado={data}/>
      </div>
    </div>
  );
}

export default App;
