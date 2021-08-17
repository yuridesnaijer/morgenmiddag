import CoverImage from "./coverImage";
import React from "react";
import PostTitle from "./postTitle";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <CoverImage title={title} src={coverImage} height={620} width={1240} />
    </>
  );
}
