import styled from "styled-components";
import Header from "../Header/Header.jsx";
import Content from "../Content/Content.jsx";
import Footer from "../Footer/Footer.jsx";
import GlobalStyle from "../globalStyles.js";
import Container from "./style.js";
import React, { useState } from "react";
import WelcomePage from "../Welcome.jsx";

export default function App() {
  
  const [hits, setHits] = useState(0)
  const [textResult, setResult] = useState(hits+"/8 Concluídos")
  const [state, setState] = useState("zero");

  function startZap(){
    let start = "first"
    setState(start)
  }

  function changeResult (){
    let count = hits + 1
    setHits(count)
    setResult(count+'/8 Concluídos');
  }
  
  
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <WelcomePage state={state} startZap={startZap} />
        <Header state={state}/>
        <Content state={state} changeResult={changeResult}/>
        <Footer state={state} text={textResult}/>
      </Container>
    </React.Fragment>
  );
}
