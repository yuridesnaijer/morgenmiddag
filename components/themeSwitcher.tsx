import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./themeContext/themeContext";
import DefaultTheme from "../styles/themes/default";
import DarkTheme from "../styles/themes/dark";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    if (theme === DefaultTheme) {
      setTheme(DarkTheme);
    } else {
      setTheme(DefaultTheme);
    }
  };

  return (
    <StyledButton onClick={switchTheme}>
      <StyledFontAwesomeIcon icon={faLightbulb} />
    </StyledButton>
  );
};

export default ThemeSwitcher;

const StyledButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  height: 1rem;
  cursor: pointer;
`;
