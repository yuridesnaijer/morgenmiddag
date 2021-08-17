import Image from "next/image";

interface ICoverImageProps {
  title: string;
  src: string;
  height: number;
  width: number;
}

export default function CoverImage(props: ICoverImageProps) {
  const { src, title, height, width } = props;

  return (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      layout="responsive"
      width={width}
      height={height}
    />
  );
}
