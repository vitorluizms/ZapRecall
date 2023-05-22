import styled from "styled-components";

const ContainerFooter = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  display: ${(props) => (props.state === "zero" ? "none" : "")};
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #333333;
  }
`;

export default ContainerFooter;
