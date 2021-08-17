import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <a className="hover:underline">Morgenmiddag</a>
      </Link>
      .
    </StyledHeader>
  );
}

const StyledHeader = styled.h2`
  letter-spacing: -0.04em;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-bottom: 5rem;
  margin-top: 2rem;
`;
