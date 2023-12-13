import Header from "../components/Header";
import Main from "../components/Main";
import styled from "styled-components";

export default function Layout() {
  return (
    <StLayout>
      <Header />
      <Main />
    </StLayout>
  );
}

const StLayout = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  padding: 20px;
`;
