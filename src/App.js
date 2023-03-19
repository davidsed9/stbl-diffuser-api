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

const generateImage = async () => {
  const imageParameters = {
    prompt: userPrompt,
    n: parseInt(number),
    size: size,
  }

  const response = await openai.createImage(imageParameters);
  const urlData =response.data.data[0].url;
  setImageUrl(urlData)
}

const handleNumberChange = (value) => {
  setNumber(parseInt(value, 10))
}

  return (
    <div className='App'>
      {imageUrl && <img src={imageUrl} className="image" alt="ai image" />}
      <Navbar />
       <Main label={"Empieza a Crear"} setAttribute={setUserPrompt}/>
       <Main label={"Numero de Fotos"} setAttribute={handleNumberChange}/>
       <Main label={"Tamaño"} setAttribute={setSize}/>
      <SubmitButton onSubmit={generateImage} />
     
    </div>
  )
}

export default App
