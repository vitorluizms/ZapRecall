import styled from "styled-components";

export default function Content() {
  const cards = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão da linguagem JavaScript",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  return (
    <ContainerDeck>
      {cards.map((card, index) => (
        <Flashcard>
          <p>Pergunta {index + 1}</p>
        </Flashcard>
      ))}
    </ContainerDeck>
  );
}

const ContainerDeck = styled.div`
  width: 300px;
  height: 695px;
  margin-top: 51px;
  margin-bottom: 116px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Flashcard = styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  border-radius: 5px;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    margin-left: 15px;
    color: #333333;
  }
`;
