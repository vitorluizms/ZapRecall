import styled from "styled-components";

export default function Flashcard(props) {
  const {
    card,
    index,
    replaceCard,
    question,
    answer,
  } = props;
  return (
    <Card card={card}>
      <div>
        <p>
          {question.includes(card.question) && !answer.includes(card.answer)
            ? card.question
            : answer.includes(card.answer)
            ? card.answer
            : card.number}
        </p>
        <img
          onClick={() => replaceCard(card, index)}
          src={card.icon}
          alt="play"
        />
      </div>
      <ContainerButtons card={card}>
        <Button1></Button1>
        <Button2></Button2>
        <Button3></Button3>
      </ContainerButtons>
    </Card>
  );
}

const Card = styled.div`
  width: 300px;
  height: 131px;

  margin-bottom: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  border-radius: 5px;
  div:first-child {
    width: 300px;
    height: 65px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    margin-left: 15px;
    color: #333333;
  }

  img {
    width: 20px;
    height: 23px;
    margin-right: 15px;
    margin-top: 110px;
  }
`;
const ContainerButtons = styled.div`
  width: 270px;
  height: 37px;
  margin-left: 17px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  display: ${props => props.card.stage !== 'third' ? 'none' : ''};
`;

const Button1 = styled.button`
  width: 85.17px;
  height: 37.17px;
  border: none;

  background: #ff3030;
  border-radius: 5px;
`;
const Button2 = styled.button`
  width: 85.17px;
  height: 37.17px;
  border: none;

  background: #ff922e;
  border-radius: 5px;
`;
const Button3 = styled.button`
  width: 85.17px;
  height: 37.17px;
  border: none;

  background: #2fbe34;
  border-radius: 5px;
`;
