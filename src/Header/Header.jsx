import ContainerHeader from "./style";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <ContainerHeader>
      <img src={logo} alt={logo} />
      <h1>ZapRecall</h1>
    </ContainerHeader>
  );
}
