import styled from "styled-components";
import Header from "../Header/Header.jsx";
import Content from "../Content/Content.jsx";
import Footer from "../Footer/Footer.jsx";
import GlobalStyle from "../globalStyles.js";
import Container from "./style.js";
import React, { useState } from "react";
import WelcomePage from "../Welcome.jsx";
import right from "../assets/icone_certo.png";
import wrong from "../assets/icone_erro.png";
import almost from "../assets/icone_quase.png";

export default function App() {
  
  const [hits, setHits] = useState(0)
  const [textResult, setResult] = useState(hits+"/8 Concluídos")
  const [state, setState] = useState("zero");
  const [arrayResult, setArrayResult] = useState([])
  const [finalState, setFinal] = useState(false)

  function startZap(){
    let start = "first"
    setState(start)
  }

  function changeResult (result){
    let count = hits + 1
    let array = [...arrayResult]
    setHits(count)
    setResult(count+'/8 Concluídos');

    if(count === 8) {
      setFinal(true)
    }

    if (result === "right") {
      array.push(right)
    } else if (result === "wrong") {
      array.push(wrong)
    } else {
      array.push(almost)
    }
    setArrayResult(array)
  }
  
  
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <WelcomePage state={state} startZap={startZap} />
        <Header state={state}/>
        <Content state={state} final={finalState} changeResult={changeResult}/>
        <Footer state={state} text={textResult} icons={arrayResult} final={finalState}/>
      </Container>
    </React.Fragment>
  );
}
