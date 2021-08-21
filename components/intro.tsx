import styled from "styled-components";
import Header from "./header";
import ThemeSwitcher from "./themeSwitcher";

export default function Intro() {
  return (
    <StyledIntro>
      <Header />
      <ThemeSwitcher />
      <StyledSubTitle>Rustig aan, blijven gaan.</StyledSubTitle>
    </StyledIntro>
  );
}

const StyledIntro = styled.section`
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const StyledTitle = styled.h1`
  font-size: 100px;
  font-weight: 700;
  letter-spacing: -4px;
  line-height: 120px;
`;

const StyledSubTitle = styled.h2`
  font-style: italic;
  font-size: 0.75rem;
`;
