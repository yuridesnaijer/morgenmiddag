import React from "react";
import styled from "styled-components";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <a target="_blank" href="http://www.instagram.com/morgenmiddag">
          <StyledFontAwesomeIcon icon={faInstagram} />
        </a>
        <StyledFontAwesomeIcon icon={faYoutube} />
      </StyledSocialLinks>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(234, 234, 234);
  padding: 1rem;
`;

const StyledSocialLinks = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 2rem;
  margin: 0.5rem;
`;
