import styled from "styled-components";

export default function Footer() {
  return (
    <ContainerFooter>
      <p>0/8 Concluídos</p>
    </ContainerFooter>
  );
}

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
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #333333;
  }
`;
