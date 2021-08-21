import styled from "styled-components";

export default function PostTitle({ children }) {
  return <StyledPostTitle>{children}</StyledPostTitle>;
}

const StyledPostTitle = styled.h1`
  font-size: 10vw;
  line-height: 1;
  letter-spacing: -4px;
  margin-bottom: 3rem;
  font-weight: 700;
`;
