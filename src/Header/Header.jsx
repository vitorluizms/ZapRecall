import ContainerHeader from "./style";
import logo from "../assets/logo.png";

export default function Header(props) {

  const {state} = props
  return (
    <ContainerHeader state={state}>
      <img src={logo} alt={logo} />
      <h1>ZapRecall</h1>
    </ContainerHeader>
  );
}
