import Image from "next/image";

interface ICoverImageProps {
  title: string;
  src: string;
  height: number;
  width: number;
}

export default function CoverImage(props: ICoverImageProps) {
  const { src, title, height, width } = props;

  return <img src={src} alt={`Cover Image for ${title}`} />;
}
