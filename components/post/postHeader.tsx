import React from "react";
import styled from "styled-components";
import CoverImage from "./coverImage";
import PostTitle from "./postTitle";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <StyledPostHeader>
      <PostTitle>{title}</PostTitle>

      <CoverImage title={title} src={coverImage} height={620} width={1240} />
    </StyledPostHeader>
  );
}

const StyledPostHeader = styled.div`
  position: relative;
`;
