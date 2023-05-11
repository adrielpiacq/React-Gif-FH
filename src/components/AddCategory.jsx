import { useState } from 'react';


export const AddCategory = ({ onAddCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length<=1) return;
    onAddCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={handleInputSubmit}>
      <input
        type="text" 
        placeholder="Busque aquí su GIF"
        value={ inputValue }
        onChange={ handleInputChange }
      />      
    </form>
  )
}


export default AddCategory;
