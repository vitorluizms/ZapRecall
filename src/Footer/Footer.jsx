import ContainerFooter from "./style";

export default function Footer(props) {
  
  const {text, state} = props;
  
  return (
    <ContainerFooter state={state} data-test="footer">
      <p>{text}</p>
    </ContainerFooter>
  );
}


