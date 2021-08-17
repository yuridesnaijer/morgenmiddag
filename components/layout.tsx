import Footer from "../components/footer";
import Meta from "../components/meta";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <StyledMinScreenHeight>
        <main>{children}</main>
        <Footer />
      </StyledMinScreenHeight>
    </>
  );
}

const StyledMinScreenHeight = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
