import { useState } from "react"

export  function TextBar(){
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
      setInputValue(event.target.value);
    }
  
    return (
      <div>
        <label htmlFor="my-input">Introduce un valor:</label>
        <input id="my-input" type="text" value={inputValue} onChange={handleInputChange} />
        <p>El valor introducido es: {inputValue}</p>
      </div>
    );
    // const [] = useState()

    // return (
    //     <input  type="text" />
    // )
}