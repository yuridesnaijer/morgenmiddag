import styled from "styled-components";

interface ICoverImageProps {
  title: string;
  src: string;
  height: number;
  width: number;
}

export default function CoverImage(props: ICoverImageProps) {
  const { src, title } = props;

  return <StyledImage src={src} alt={`Cover Image for ${title}`} />;
}

const StyledImage = styled.img`
  width: 100%;
`;
