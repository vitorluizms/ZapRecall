import styled from "styled-components";

const ContainerFooter = styled.div`
  width: 100%;
  height: ${(props) => (props.final === true ? "171px" : "70px")};
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  display: ${(props) => (props.state === "zero" ? "none" : "")};
  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    display: ${(props) => (props.final === false ? "none" : "")};
    margin-bottom: 14px;

    div {
      display: flex;
      flex-direction: row;
      margin-bottom: 14px;
    }

    img {
      margin-right: 12px;
    }
    h1 {
      font-family: "Recursive", cursive;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;

      color: #333333;
    }
  }

  p {
    font-family: "Recursive", cursive;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #333333;
  }

  div:last-child {
    margin-top: 6px;
  }
`;

export default ContainerFooter;
