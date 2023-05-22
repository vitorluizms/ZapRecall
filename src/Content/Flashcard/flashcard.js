import styled from "styled-components";


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

export default Card;
