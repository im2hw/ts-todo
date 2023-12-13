import React from "react";
import Layout from "./shared/Layout";
import styled from "styled-components";
import bgImg from "./assets/배경_half_trans.png";
import GlobalStyle from "./style/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <StContainer background={bgImg}>
        <Layout />
      </StContainer>
    </>
  );
}
const StContainer = styled.div<StContainerProps>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface StContainerProps {
  background?: string;
}
