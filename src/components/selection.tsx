import { useState } from "react";

interface Element {
  value: string;
  text: string;
}

/*
English
Spanish
French
German
Italian
Portuguese
Dutch
Russian
Japanese
Simplified Chinese

Korean
Arab
Hindi
Bengali
Punjabi
Marathi
telugu
Tamil
Urdu.
*/

export function SelectList() {
  const [elements, setElements] = useState<Element[]>([
    { value: "English", text: "English" },
    { value: "Spanish", text: "Spanish" },
    { value: "French", text: "French" },
    { value: "German", text: "German" },
    { value: "Italian", text: "Italian" },
    { value: "Portuguese", text: "Portuguese" },
    { value: "Dutch", text: "Dutch" },
    { value: "Russian", text: "Russian" },
    { value: "Japanese", text: "Japanese" },
    { value: "Simplified Chinese", text: "Simplified Chinese" },
    { value: "Traditional Chinese", text: "Traditional Chinese" },
    { value: "Korean", text: "Korean" },
    { value: "Arab", text: "Arab" },
    { value: "Hindi", text: "Hindi" },
    { value: "Bengali", text: "Bengali" },
    { value: "Punjabi", text: "Punjabi" },
    { value: "Marathi", text: "Marathi" },
    { value: "Telugu", text: "Telugu" },
    { value: "Tamil", text: "Tamil" },
    { value: "Urdu", text: "Urdu" },
  ]);

  const [selectedElement, setSelectedElement] = useState<string>("");

  function handleSelection(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedElement(event.target.value);
    console.log(event.target.value);
  }

  return (
    <select value={selectedElement} onChange={handleSelection}>
      {elements.map((element) => (
        <option key={element.value} value={element.value}>
          {element.text}
        </option>
      ))}
    </select>
  );
}
