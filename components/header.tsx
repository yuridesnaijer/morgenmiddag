import styled, { css } from "styled-components";
import Link from "next/link";

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
  font-size: ${(props) => (props.size === "small" ? "2rem" : "10vw")};
  line-height: 2.5rem;
  margin-bottom: 5rem;
  margin-top: 2rem;

  ${(props) => css`
    color: ${props.theme.copy.header.color};
  `}
`;

const StyledHeaderLink = styled.span`
  ${(props) => css`
    color: ${props.theme.copy.header.color};
    cursor: pointer;
  `}

  :hover {
    text-decoration: underline;
  }
`;
