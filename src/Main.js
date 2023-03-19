import React, { useState } from 'react'
import "./Main.css"

function Main({ label, setAttribute}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setAttribute(value);
  };

  return (
    <><div className='label-input-pair'>
          <label className='label'>{label}:</label>
          <input className='main-input' value={inputValue} onChange={handleInputChange} />
      </div>
      </>
  );
}

export default Main
