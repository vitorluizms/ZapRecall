import ContainerFooter from "./style";

export default function Footer(props) {
  
  const {text} = props;
  
  return (
    <ContainerFooter data-test="footer">
      <p>{text}</p>
    </ContainerFooter>
  );
}


