import styled from "styled-components";
import play from "../../assets/seta_play.png";
import turn from "../../assets/seta_virar.png";
import right from "../../assets/icone_certo.png";
import wrong from "../../assets/icone_erro.png";
import almost from "../../assets/icone_quase.png";
import Card from "./flashcard";
import ContainerButtons from "./botões";

export default function Flashcard(props) {
  const { card, index, replaceCard, question, answer, fourthStage } = props;
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
        <button
          data-test="no-btn"
          onClick={() => fourthStage(card, index, "wrong")}
        >
          <p>Não lembrei</p>
        </button>
        <button
          data-test="partial-btn"
          onClick={() => fourthStage(card, index, "almost")}
        >
          <p>Quase não lembrei</p>
        </button>
        <button
          data-test="zap-btn"
          onClick={() => fourthStage(card, index, "right")}
        >
          <p>Zap!</p>
        </button>
      </ContainerButtons>
    </Card>
  );
}
