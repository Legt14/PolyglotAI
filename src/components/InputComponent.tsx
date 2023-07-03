interface Input {
  getInput: (value: string) => void;
}

export function InputComponent({ getInput }: Input) {
  function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    getInput(event.target.value);
  }

  return (
    <textarea
      name="input"
      className="w-full h-28 lg:h-80 break-words 
      resize-none focus:outline-none rounded-lg border-2 focus:border-c-violet p-3 bg-transparent text-c-light"
      onChange={handleInputChange}
      placeholder="Hola"
    ></textarea>
  );
}
