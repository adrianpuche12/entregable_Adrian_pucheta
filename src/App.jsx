import './App.css'
import Form from './components/Form'
import Title from './components/Title'
import { useState } from 'react';
import Dates from './components/Dates';
import Error from './components/Error';

function App() {

  const [datos, setDatos] = useState([]);
  const [errores, setErrores] = useState([]);


  const addDato = (patient) => {
    setDatos([...datos, patient]);
  };

  const addError = (error) => {
    setErrores([...errores, error]);
  };


  return (
    <div className='flex'>
      <Title text="Ingresa tus datos y disfruta de la mejor Musica" />
      <Form onAddDatos={addDato} onAddErrores={addError} />
      <Dates datos={datos} />
      <Error errores={errores} />
    </div>
  )
}

export default App
