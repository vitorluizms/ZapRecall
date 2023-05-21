import styled from "styled-components";
import play from "./assets/seta_play.png";
import turn from "./assets/seta_virar.png";
import { useState } from "react";
import Flashcard from "./Flashcard";

export default function Content() {
  const [icon, setImage] = useState(play);

  const [cards, setCards] = useState([
    {
      icon: play,
      number: "Pergunta 1",
      question: "O que é JSX?",
      answer: "Uma extensão da linguagem JavaScript",
      stage: "first",
    },
    {
      icon: play,
      number: "Pergunta 2",
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
      stage: "first",
    },
    {
      icon: play,
      number: "Pergunta 3",
      question: "Componentes devem iniciar com __",
      answer: "Letra maiúscula",
      stage: "first",
    },
    {
      icon: play,
      number: "Pergunta 4",
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
      stage: "first",
    },
    {
      icon: play,
      number: "Pergunta 5",
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
      stage: "first",
    },
    {
      icon: play,
      number: "Pergunta 6",
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
      stage: "first",
    },
    {
      icon: play,
      number: "Pergunta 7",
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes",
      stage: "first",
    },
    {
      icon: play,
      number: "Pergunta 8",
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      stage: "first",
    },
  ]);

  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [firstStage, setFirst] = useState(true);
  const [secondStage, setSecond] = useState(false);
  const [thirdStage, setThird] = useState(false);

  function replaceCard(card, index) {
    let array = [...cards];
    let arrayQuestion = [...question];
    let arrayAnswer = [...answer];
    if (!card.icon.includes(turn)) {
      array[index].icon = turn;
    }
    if (!question.includes(card.question)) {
      arrayQuestion[index] = card.question;
      setQuestion(arrayQuestion);
    } else if (
      !answer.includes(card.answer) &&
      question.includes(card.question)
    ) {
      arrayAnswer[index] = card.answer;
      setAnswer(arrayAnswer);
    }
    setCards(array);
  }
  console.log(question);
  console.log(answer);
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
