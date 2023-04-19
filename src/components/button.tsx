import { useState } from "react";
import { ButtonProps } from "../models/button";
import { connection } from "@/utils/api";

export function Button({ input, data, lang }: ButtonProps) {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsloading] = useState(false);
  async function handlerClick() {
    try {
      setIsloading(true);
      const response = await connection(input, lang);
      let text = response.data.choices.map((record) => record.message?.content);

      data(text.toString());
      setIsloading(false);
      setIsError("✓");
    } catch (err) {
      setIsloading(false);
      setIsError("↻");
      console.log("this is a error: " + err);
    }
  }

  return (
    <section>
      <button
        onClick={handlerClick}
        className={`rounded-lg border-2 w-24 text-c-light hover:border-c-violet ${
          isLoading
            ? "bg-c-dark-purpel text-c-purpel border-c-violet"
            : "bg-transparent"
        }`}
        disabled={isLoading}
      >
        Translate <span>{isError}</span>
      </button>
    </section>
  );
}
