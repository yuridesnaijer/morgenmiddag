import React from "react";
import styled from "styled-components";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        Checkout my
        <a target="_blank" href="http://www.instagram.com/morgenmiddag">
          <StyledFontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCFcu34qcfs-Ev-BLrtKWEgg"
        >
          <StyledFontAwesomeIcon icon={faYoutube} />
        </a>
      </StyledSocialLinks>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  border-top: 1px solid;
  padding: 1rem;
`;

const StyledSocialLinks = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 2rem;
  margin: 0.5rem;
`;
