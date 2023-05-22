import styled from "styled-components";

const ContainerWelcome = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;

  display: ${(props) => (props.state !== "zero" ? "none" : "")};

  img {
    width: 136px;
    height: 161px;
  }

  p {
    font-family: "Righteous", cursive;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;

    color: #ffffff;
  }

  button {
    width: 246px;
    height: 54px;

    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    font-family: "Recursive", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #d70900;
  }
`;

export default ContainerWelcome;
