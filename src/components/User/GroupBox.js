import { useContext } from "react";
import styled from "styled-components";
import Box from "../../components/Layout/Box"
import UserContext from "../../context/userContext";
import { Group } from "./Group";

export function GroupBox(){
    const {userData} = useContext(UserContext);
    const groups = userData?.Groups;
    return(
        <GroupBoxDiv>
            {groups?.length === 0 ? <p className="no-groups-user">Não participa de nenhum grupo</p>:
            <ul>
                {groups?.map((e) => {
                   return <Group key={e.id} id={e.id} urlImage={e.urlImage} name={e.name} position={e.position} />
                })}
            </ul>
            } 
        </GroupBoxDiv>
    )
}

const GroupBoxDiv = styled(Box)`
width: 100%;
height: 230px;
margin-top: 1rem;
padding-top: 1rem;
.no-groups-user{
    margin: 0 auto;
}
`