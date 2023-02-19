import { useState } from 'react';
import './App.css';
import Boton from "./componentes/Boton";
import Contador from './componentes/Contador';

function App() {

  const [count, setCount] = useState(0);

  const contadorClick = () => {
    setCount(count + 1);
  }

  const reinicarContador = () => {
    setCount(0);
  }

  return (
    <div className='App'>
      <div className='container_titulo'>
        <h1>Contador de clicks</h1>
      </div>
      <div className='container_logo'>
      <img src={require("./imagen/reactLogo.png")} alt='Logo del proyecto' title='Logo' />
      </div>
      <Contador valor={count} />
      <div className='container_botones'>
      <Boton texto="click" tipo={true} actividad={contadorClick} />
      <Boton texto="Reiniciar" tipo={false} actividad={reinicarContador} />
      </div>
    </div>
  );
}

export default App;