import Link from "next/link";
import IBlogPost from "../types/IBlogPost";
import React from "react";
import ProjectCard from "./constructs/projectCard/projectCard";

interface IGridProps {
  items: IBlogPost[];
}

const Grid: React.FC<IGridProps> = (props) => {
  const { items } = props;

  return (
    <>
      {items.map((item) => (
        <ProjectCard key={item.slug} project={item} />
      ))}
    </>
  );
};

export default Grid;
