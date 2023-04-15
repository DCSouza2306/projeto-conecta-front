import styled from "styled-components";
import { useLeaveGroup } from "../../../hooks/api/useMember";
import { useContext } from "react";
import UserContext from "../../../context/userContext";
import GroupContext from "../../../context/groupContext";
import { useGroupId } from "../../../hooks/api/useGroupId";
import Swal from "sweetalert2";

export function Options({ display, role, setEnable }) {
 const { userProfileData } = useContext(UserContext);
 const { groupData, setGroupData } = useContext(GroupContext);
 const userId = userProfileData?.user?.id;
 const groupId = groupData?.id;
 const { leaveGroupLoading, leaveGroup } = useLeaveGroup();
 const { getGroupById } = useGroupId(groupId, false);
 const token = userProfileData?.token;

 async function leaveRequest() {
    setEnable(!display);
  Swal.fire({
   title: "Deseja realmente sair do grupo?",
   icon: "question",
   showCancelButton: true,
   confirmButtonColor: "#5c548c",
   cancelButtonText: "Cancelar",
   cancelButtonColor: "#E95A5A",
   confirmButtonText: "Sim, desejo sair!",
  }).then(async (result) => {
   if (result.isConfirmed) {
    try {
     await leaveGroup(token, groupId);
     const group = await getGroupById(groupId);
     setGroupData(group);
     setEnable(!display);
    } catch (error) {
        Swal.fire('Erro ao sair do grupo')
    }
   }
  });
 }

 return (
  <OptionsDiv displayDiv={display}>
   <ul>
    {(role === "owner" || role === "administrator") && <li>Editar Grupo</li>}
    {(role === "owner" || role === "administrator") && <li>Solicitações</li>}
    {(role === "member" || role === "administrator") && (
     <li onClick={() => leaveRequest()}>Sair do grupo</li>
    )}
   </ul>
  </OptionsDiv>
 );
}

const OptionsDiv = styled.div`
 width: 375px;
 min-height: 50px;
 max-height: ${(props) => (props.displayDiv ? "110px" : "50px")};
 background-color: #5c548c;
 position: absolute;
 right: 388px;
 top: 250px;
 border-radius: 0 0 50px 50px;
 color: #ffffff;
 transition: height 1s, transform 1s;
 transform: ${(props) => (props.displayDiv ? "" : "translate(0, -40px)")};
 visibility: ${(props) => (props.displayDiv ? "" : "hidden")};
 display: flex;
 justify-content: center;
 ul {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  li {
   margin-top: 0.5rem;
   :hover {
    cursor: pointer;
    text-decoration: underline;
   }
  }
 }
`;
