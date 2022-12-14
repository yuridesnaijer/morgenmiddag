import Footer from "../components/footer";
import Meta from "../components/meta";
import { Container } from "@chakra-ui/react";
import Header from "./header";
import ThemeSwitcher from "./themeSwitcher";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <StyledIntro>
        <Header />
        <ThemeSwitcher />
        <StyledSubTitle>Rustig aan, blijven gaan.</StyledSubTitle>
      </StyledIntro>
      <main>
        <Container maxW={"7xl"}>{children}</Container>
      </main>
      <Footer />
    </>
  );
}

const StyledIntro = styled.section`
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const StyledSubTitle = styled.h2`
  font-style: italic;
  font-size: 0.75rem;
`;
