import styled from "styled-components";
import Header from "../Header/Header.jsx";
import Content from "../Content/Content.jsx";
import Footer from "../Footer/Footer.jsx";
import GlobalStyle from "../globalStyles.js";
import Container from "./style.js";
import React, { useState } from "react";

export default function App() {
  
  const [hits, setHits] = useState(0)
  const [textResult, setResult] = useState(hits+"/8 Concluídos")
  function changeResult (){
    let count = hits + 1
    setHits(count)
    setResult(count+'/8 Concluídos');
  }
  
  
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header />
        <Content changeResult={changeResult}/>
        <Footer text={textResult}/>
      </Container>
    </React.Fragment>
  );
}
