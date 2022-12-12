import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";
import IBlogPost from "../types/IBlogPost";
import React from "react";

interface IGridProps {
  items: IBlogPost[];
}

const Grid: React.FC<IGridProps> = (props) => {
  const { items } = props;

  return (
    <>
      {items.map((item) => (
        <Link key={item.slug} as={`/posts/${item.slug}`} href="/posts/[slug]">
          <StyledGridItem href={`/posts/${item.slug}`}>
            <img alt={item.title} src={item.coverImage} />
          </StyledGridItem>
        </Link>
      ))}
    </>
  );
};

export default Grid;

const StyledGridItem = styled.a`
  display: block;
  cursor: pointer;
  margin: 0;

  & > img {
    width: 100%;
  }
`;
