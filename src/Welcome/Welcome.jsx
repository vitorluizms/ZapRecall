import styled from "styled-components";
import logo from "../assets/logo.png";
import ContainerWelcome from "./style";

export default function WelcomePage(props) {
  const { startZap, state } = props;

  return (
    <ContainerWelcome state={state}>
      <img src={logo} alt="logo" />
      <p>ZapRecall</p>
      <button data-test="start-btn" onClick={() => startZap()}>
        Iniciar Recall!
      </button>
    </ContainerWelcome>
  );
}
