import styled, { css } from "styled-components";
import Link from "next/link";
import React from "react";

interface IHeaderProps {
  size?: "small";
}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <StyledHeader {...props}>
      <Link href="/">
        <StyledHeaderLink>Morgenmiddag</StyledHeaderLink>
      </Link>
      .
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.h2`
  font-family: system-ui;
  letter-spacing: -0.04em;
  font-weight: 700;
  line-height: 2.5rem;
  margin-bottom: 5rem;
  margin-top: 2rem;
`;

const StyledHeaderLink = styled.span`
  ${(props) => css`
    cursor: pointer;
  `}

  :hover {
    text-decoration: underline;
  }
`;
