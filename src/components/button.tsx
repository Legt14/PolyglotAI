import { useState } from "react";
import { ButtonProps } from "../models/button";
import { connection } from "@/utils/api";

export function MyButton(prop: ButtonProps) {
  const [translated, setTranslated] = useState<string>("");
  async function handlerClick() {
    const response = await connection(prop.input, prop.lang);
    const text: string = response.data.choices[0].message?.content;
    console.log(text);
    setTranslated(text);
  }

  return <button onClick={handlerClick}>Translate</button>;
}
