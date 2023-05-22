import styled from "styled-components";

const ContainerDeck = styled.div`
  width: 300px;
  height: auto;
  margin-top: 51px;
  margin-bottom: 116px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: ${(props) => (props.state === "zero" ? "none" : "flex")};
`;

export default ContainerDeck;
