import ContainerFooter from "./style";
import right from "../assets/icone_certo.png";
import wrong from "../assets/icone_erro.png";
import almost from "../assets/icone_quase.png";
import party from "../assets/party.png";
import sad from "../assets/sad.png";

export default function Footer(props) {
  const { text, state, icons, final } = props;

  return (
    <ContainerFooter state={state} final={final} data-test="footer">
      <div data-test="finish-text">
        <div>
          <img src={!icons.includes(wrong) ? party : sad}></img>
          <h1>{!icons.includes(wrong) ? "Parabéns!" : "Putz..."}</h1>
        </div>
        <p>
          {!icons.includes(wrong)
            ? "Você não esqueceu de"
            : "Ainda faltam alguns..."}
        </p>
        <p>
          {!icons.includes(wrong) ? "nenhum flashcard" : "Mas não desanime"}
        </p>
      </div>
      <p>{text}</p>
      <div>
        {icons.map((icon, index) => (
          <Image key={index} icon={icon} />
        ))}
      </div>
    </ContainerFooter>
  );
}

function Image(props) {
  return (
    <img
      data-test={
        props.icon === right
          ? "zap-icon"
          : props.icon === wrong
          ? "no-icon"
          : "partial-icon"
      }
      src={props.icon}
      alt={props.icon}
    />
  );
}
