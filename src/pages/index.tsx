import { Button } from "../components/button";
import { InputComponent } from "../components/InputComponent";
import { SelectList } from "@/components/Selection";
import { useState } from "react";
import { Display } from "@/components/DisplayComponent";
import { SocialComponent } from "../components/Social";

export default function Home() {
  let img = 'https://img.shields.io/github/stars/Legt14/translate-app.github?color=%237d5eb5&logo=github&style=for-the-badge'
  const [translated, setTranlated] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [lang, setLang] = useState<string>("");

  function data(response: string) {
    setTranlated(response);
  }

  function getInput(data: string) {
    setInputValue(data);
  }

  function getLang(data: string) {
    setLang(data);
  }

  return (
    <main className="w-full h-screen flex flex-col lg:flex-row lg:items-start font-signika items-center justify-between gap-5 bg-c-black text-c-violet">
      <section className="w-full p-5 flex flex-col items-center gap-14">
        <div className="flex">
          <h1 className="text-7xl text-c-light text-right">Polyglot</h1>
          <span className="text-7xl font-signika">AI</span>
        </div>
        <section className="w-full flex flex-col gap-8">
          <section className="w-full flex fle justify-between ">
            <SelectList getLang={getLang} />
            <Button input={inputValue} lang={lang} data={data} />
          </section>
          <InputComponent getInput={getInput} />
        </section>
        <section>
          <SocialComponent name={"Git"} img={img} link={"https://github.com/Legt14/translate-app.github"} />
        </section>
      </section>
      <Display data={translated} />
    </main>
  );
}
