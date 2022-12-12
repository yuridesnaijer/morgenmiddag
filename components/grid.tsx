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
          <img alt={item.title} src={item.coverImage} />
        </Link>
      ))}
    </>
  );
};

export default Grid;
