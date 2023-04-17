import styled from "styled-components";
import ButtonStyled from "../../Layout/ButtonStyled";
import { useContext } from "react";
import UserContext from "../../../context/userContext";
import { AiFillCaretDown } from "react-icons/ai";
import { Options } from "./SettingsGroup";
import { useState } from "react";
import { useRequest } from "../../../hooks/api/useMember";
import { useEffect } from "react";
import GroupContext from "../../../context/groupContext";

export function ButtonsGroup({
 groupStatus,
 memberStatus,
 groupId,
 getGroupById
}) {
  
 const { requestLoading, requestMember } = useRequest();
 const { userProfileData } = useContext(UserContext);
 const { setGroupData } = useContext(GroupContext);
 const token = userProfileData?.token;
 const [enable, setEnable] = useState(false);
 const userId = userProfileData?.user?.id;
 const isMember = memberStatus?.filter((e) => e.id === userId);
 let role;
 let status;
 isMember?.forEach((e) => {
  role = e.position;
  status = e.status;
 });
 useEffect(() => {
 } ,[requestLoading])

 async function request() {
  try {
   await requestMember(token, groupId);
   const groupData = await getGroupById(groupId);
    setGroupData(groupData);
  } catch (error) {
  }
 }

 function toggleSettings() {
  setEnable(!enable);
 }
 return (
  <>
   {groupStatus === "OPEN" && !status && (
    <ButtonRequest onClick={() => request()}>Solicitar</ButtonRequest>
   )}
   {status === "APPLIED" && (
    <ButtonRequest disabled={true}>Aguardando</ButtonRequest>
   )}
   {status === "APROVED" && (
    <ButtonRequest onClick={() => toggleSettings()} boxShadow={enable}>
     Opções <AiFillCaretDown />{" "}
    </ButtonRequest>
   )}
   {groupStatus === "CLOSED" && status !== "APROVED" && (
    <ButtonRequest disabled={true}>Grupo Fechado</ButtonRequest>
   )}
   <Options display={enable} role={role} setEnable={setEnable} />
  </>
 );
}

const ButtonRequest = styled(ButtonStyled)`
 width: 375px;
 font-size: 32px;
 height: 90px;
 z-index: 1;
 transition: border-radius 1s;
 box-shadow: ${(props) =>
  props.boxShadow ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
 border-radius: ${(props) => (props.boxShadow ? "50px 50px 0 0" : "")};
`;
