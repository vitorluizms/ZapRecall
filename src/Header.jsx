import styled from "styled-components";
import logo from "./assets/logo.png";

export default function Header() {
  return (
    <ContainerHeader>
      <img src={logo} alt={logo} />
      <h1>ZapRecall</h1>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
  width: 256px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 42px;

  img {
    width: 52px;
    height: 60px;
  }

  h1 {
    width: 203.17px;
    height: 44px;
    font-family: "righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    letter-spacing: -0.012em;
    color: #ffffff;
  }
`;
