import React, { useState } from 'react'
import Main from './Main'
import Navbar from './Navbar'
import SubmitButton from './SubmitButton'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);

function App() {
const [userPrompt,setUserPrompt] = useState("");
const [number,setNumber] = useState(1);
const [size,setSize] = useState("256x256");
const [imageUrl, setImageUrl] = useState("");

  return (
    <div className='app-container'>
      <Navbar />
       <Main label={"Empieza a Crear"} setAttribute={setUserPrompt}/>
       <Main label={"Numero de Fotos"} setAttribute={setNumber}/>
       <Main label={"Tamaño"} setAttribute={setSize}/>
      <SubmitButton />
     
    </div>
  )
}

export default App
