import styled from "styled-components";
import ButtonStyled from "../../Layout/ButtonStyled";
import { useContext } from "react";
import UserContext from "../../../context/userContext";
import {AiFillCaretDown} from "react-icons/ai"
import { Options } from "./SettingsGroup";
import { useState } from "react";

export function ButtonsGroup({ groupStatus, memberStatus }) {
 const { userProfileData } = useContext(UserContext);
 const [enable, setEnable] = useState(false);
 const userId = userProfileData.user.id;
 const isMember = memberStatus?.filter((e) => e.id === userId);
 let role;
 let status;
 isMember?.forEach((e) => {
  role = e.position;
  status = e.status;
 });

 function toggleSettings(){
    setEnable(!enable)
 }
 return (
  <>
   {groupStatus === "OPEN" && !status && (
    <ButtonRequest>Solicitar</ButtonRequest>
   )}
   {status === "APPLIED" && (
    <ButtonRequest disabled={true}>Aguardando</ButtonRequest>
   )}
   {status === "APROVED" && (
    <ButtonRequest onClick={() => toggleSettings()} boxShadow={enable}>Opções <AiFillCaretDown /> </ButtonRequest>
   )}
   {groupStatus === "CLOSED" && (
    <ButtonRequest disabled={true}>Grupo Fechado</ButtonRequest>
   )}
   <Options display={enable} role={role} />
  </>
 );
}

const ButtonRequest = styled(ButtonStyled)`
 width: 375px;
 font-size: 32px;
 height: 90px;
 z-index: 1;
 transition: border-radius 1s;
 box-shadow: ${props => props.boxShadow ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"} ;
 border-radius: ${props => props.boxShadow ? "50px 50px 0 0" : ""};
`;

