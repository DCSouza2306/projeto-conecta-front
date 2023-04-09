import styled from "styled-components";
import ButtonStyled from "../../Layout/ButtonStyled";

export function ButtonsGroup({ groupStatus, memberStatus }) {
 return (
  <>
   {groupStatus === "OPEN" ? (
    <ButtonRequest>Solicitar</ButtonRequest>
   ) : (
    <ButtonRequest disabled={true}>Grupo Fechado</ButtonRequest>
   )}
  </>
 );
}

const ButtonRequest = styled(ButtonStyled)`
 width: 375px;
 font-size: 32px;
 height: 90px;
`;
