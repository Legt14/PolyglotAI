interface Translate {
  data: string;
}

export function Display(props: Translate) {
  return (
    <article className="w-full h-64 lg:min-h-screen rounded-tl-3xl lg:rounded-bl-3xl pt-2 pl-2 lg:pb-2 pr-2 lg:pr-0 rounded-tr-sm lg:rounded-tr-none bg-c-violet">
      <p className="w-full h-full bg-c-black/50 text-c-light rounded-tl-3xl lg:rounded-bl-3xl p-5 rounded-tr-sm lg:rounded-tr-non overflow-y-auto">
        {props.data}
      </p>
    </article>
  );
}
