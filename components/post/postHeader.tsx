import React from "react";
import styled from "styled-components";
import CoverImage from "./coverImage";
import PostTitle from "./postTitle";

export default function PostHeader({ title, coverImage }) {
  return (
    <StyledPostHeader>
      <StyledPostTitle>{title}</StyledPostTitle>

      <CoverImage title={title} src={coverImage} height={620} width={1240} />
    </StyledPostHeader>
  );
}

const StyledPostHeader = styled.div`
  position: relative;
`;

const StyledPostTitle = styled(PostTitle)`
  margin: 0 1rem;
`;
