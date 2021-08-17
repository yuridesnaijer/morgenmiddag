import styled from "styled-components";

export default function PostBody({ content }) {
  return <StyledPostBody dangerouslySetInnerHTML={{ __html: content }} />;
}

const StyledPostBody = styled.div`
  & > h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 1rem;
    margin-top: 3rem;
  }

  & > p {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;
