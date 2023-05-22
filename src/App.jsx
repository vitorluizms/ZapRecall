import styled from "styled-components";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import GlobalStyle from "./globalStyles.js";
import React, { useState } from "react";

export default function App() {
  
  const [textResult, setResult] = useState("0/8 Concluídos")
  
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header />
        <Content />
        <Footer text={textResult}/>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  background-color: #fb6b6b;
`;
