import styled from "styled-components";
import play from "./assets/seta_play.png";
import turn from "./assets/seta_virar.png";
import right from "./assets/icone_certo.png";
import wrong from "./assets/icone_erro.png";
import almost from "./assets/icone_quase.png";

export default function Flashcard(props) {
  const { card, index, replaceCard, question, answer, fourthStage } = props;
  console.log(card);
  return (
    <Card card={card} data-test="flashcard">
      <div>
        <p data-test="flashcard-text">
          {card.stage === "first" || card.stage === "fourth"
            ? card.number
            : card.stage === "second"
            ? card.question
            : card.answer}
        </p>
        <img
          onClick={() => replaceCard(card, index)}
          src={card.icon}
          alt="play"
          data-test={
            card.icon === play
              ? "play-btn"
              : card.icon === turn
              ? "turn-btn"
              : card.icon === wrong
              ? "no-icon"
              : card.icon === right
              ? "zap-icon"
              : "partial-icon"
          }
        />
      </div>
      <ContainerButtons card={card}>
        <Button1 data-test="no-btn" onClick={() => fourthStage(card, index, "wrong")}>
          <p>Não lembrei</p>
        </Button1>
        <Button2 data-test="partital-btn" onClick={() => fourthStage(card, index, "almost")}>
          <p>Quase não lembrei</p>
        </Button2>
        <Button3 data-test="zap-btn" onClick={() => fourthStage(card, index, "right")}>
          <p>Zap!</p>
        </Button3>
      </ContainerButtons>
    </Card>
  );
}

const Card = styled.div`
  width: 300px;
  height: ${(props) =>
    props.card.stage === "first" || props.card.stage === "fourth"
      ? "65px"
      : "150px"};

  margin-bottom: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${(props) =>
    props.card.stage === "first" ? "#ffffff" : "#FFFFD5"};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  border-radius: 5px;
  div:first-child {
    width: 300px;
    height: 65px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-family: "Recursive";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      word-break: break-word;

      margin-left: 12px;
      color: ${(props) =>
        props.card.color === "green"
          ? "#2FBE34"
          : props.card.color === "orange"
          ? "#FF922E"
          : props.card.color === "red"
          ? "#FF3030"
          : "#333333"};
      text-decoration-line: ${(props) =>
        props.card.stage === "fourth" ? "line-through" : "none"};
    }
    img {
      margin-right: 15px;
      margin-top: ${(props) =>
        props.card.stage === "first" || props.card.stage === "fourth"
          ? "0px"
          : "180px"};
      display: ${(props) => (props.card.stage === "third" ? "none" : "")};
    }
  }
`;
const ContainerButtons = styled.div`
  width: 270px;
  height: 37px;
  margin-left: 17px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  display: ${(props) => (props.card.stage !== "third" ? "none" : "")};
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    margin-left: 0px;
  }
`;

const Button1 = styled.button`
  width: 85.17px;
  height: 37.17px;
  border: none;

  background: #ff3030;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button2 = styled.button`
  width: 85.17px;
  height: 37.17px;
  border: none;

  background: #ff922e;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button3 = styled.button`
  width: 85.17px;
  height: 37.17px;
  border: none;

  background: #2fbe34;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
