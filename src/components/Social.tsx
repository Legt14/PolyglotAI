interface Social {
  name: string;
  img: string;
  link: string;
}

export function SocialComponent({ name, img, link }: Social) {
  return (
    <a
      href={link}
      target="_blank"
    >
      <img src={img} alt={name} className="w-28"/>
    </a>
  );
}
