import { useState } from "react";

interface Lang {
  value: string;
  text: string;
}

interface Element {
  getLang: (value: string) => void;
}

export function SelectList({ getLang }: Element) {
  const elements = [
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
    { value: "Binary", text: "Binary" },
    { value: "Vietnamese", text: "Vietnamese" },
  ];

  const [selectedElement, setSelectedElement] = useState<string>("");

  function handleSelection(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedElement(event.target.value);
    getLang(event.target.value);
  }

  return (
    <select
      value={selectedElement}
      onChange={handleSelection}
      className="rounded-lg bg-c-black focus:outline-none border-2 border-c-light focus:border-c-violet text-c-light"
    >
      {elements.map((element) => (
        <option key={element.value} value={element.value}>
          {element.text}
        </option>
      ))}
    </select>
  );
}
