import styled from "styled-components";

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
  button {
    width: 85.17px;
    height: 37.17px;
    border: none;

    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  button:first-child {
    background: #ff3030;
  }
  button:last-child {
    background: #2fbe34;
  }
  button:nth-child(2) {
    background: #ff922e;
  }
`;

export default ContainerButtons;
