import { MyButton } from "../components/button";
import { TextBar } from "../components/textBar";
import { SelectList } from "@/components/selection";
import { useState } from "react";


export default function Home() {
  let lang = "spanish";
  const [translated, setTranslated] = useState<string>("");

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  
  return (
    <main className="flex flex-col">
      <label htmlFor="my-input">Introduce un valor:</label>
      <input
        id="my-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      
      <SelectList></SelectList>
      <MyButton input={inputValue} lang={lang}></MyButton>
      {translated}
    </main>
  );
}
