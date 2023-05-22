import styled from "styled-components";
import play from "./assets/seta_play.png";
import turn from "./assets/seta_virar.png";
import right from "./assets/icone_certo.png";
import wrong from "./assets/icone_erro.png";
import almost from "./assets/icone_quase.png";
import { useState } from "react";
import Flashcard from "./Flashcard";

export default function Content(props) {

  const {changeResult} = props;

  const [cards, setCards] = useState([
    {
      icon: play,
      number: "Pergunta 1",
      question: "O que é JSX?",
      answer: "Uma extensão da linguagem JavaScript",
      stage: "first",
      color: ""
    },
    {
      icon: play,
      number: "Pergunta 2",
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
      stage: "first",
      color: ""
    },
    {
      icon: play,
      number: "Pergunta 3",
      question: "Componentes devem iniciar com __",
      answer: "Letra maiúscula",
      stage: "first",
      color: ""
    },
    {
      icon: play,
      number: "Pergunta 4",
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
      stage: "first",
      color: ""
    },
    {
      icon: play,
      number: "Pergunta 5",
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
      stage: "first",
      color: ""
    },
    {
      icon: play,
      number: "Pergunta 6",
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
      stage: "first",
      color: ""
    },
    {
      icon: play,
      number: "Pergunta 7",
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes",
      stage: "first",
      color: ""
    },
    {
      icon: play,
      number: "Pergunta 8",
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      stage: "first",
      color: ""
    },
  ]);

  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);

  function replaceCard(card, index) {
    let array = [...cards];
    let arrayQuestion = [...question];
    let arrayAnswer = [...answer];
    if (card.stage === "first") {
      arrayQuestion[index] = card.question;
      setQuestion(arrayQuestion);
      array[index].stage = "second";
      array[index].icon = turn;
    } else if (card.stage === "second") {
      array[index].stage = "third";
      arrayAnswer[index] = card.answer;
      setAnswer(arrayAnswer);
    }
    setCards(array);
  }

  function fourthStage(card, index, result) {
    let array = [...cards];
    array[index].stage = "fourth";
    if (result === 'right') {
      array[index].icon = right;
      array[index].color = 'green';
    }
    else if (result === 'wrong') {
      array[index].icon = wrong;
      array[index].color = 'red';
    }
    else {
      array[index].icon = almost;
      array[index].color = 'orange';
    }
    setCards(array)
    changeResult();

  }

  return (
    <ContainerDeck>
      {cards.map((card, index) => (
        <Flashcard
          replaceCard={replaceCard}
          answer={answer}
          card={card}
          index={index}
          key={card.number}
          question={question}
          fourthStage={fourthStage}
        />
      ))}
    </ContainerDeck>
  );
}

const ContainerDeck = styled.div`
  width: 300px;
  height: auto;
  margin-top: 51px;
  margin-bottom: 116px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
