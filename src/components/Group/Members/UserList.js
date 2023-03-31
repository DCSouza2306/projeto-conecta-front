import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import ButtonStyled from "../../ButtonStyled";
import { User } from "./User";

export function UserList(){
    const {groupData} = useContext(GroupContext);
    const members = groupData?.Members
    return(
        <UserListDiv>
            <h3>Membros</h3>
            {members?.map((e) => {
                return(
                    <User
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    urlImage={e.urlImage}
                    position={e.position}
                     />
                )
            })}
            <ButtonShowUser>Exibir todos</ButtonShowUser>
        </UserListDiv>
    )
}

const ButtonShowUser = styled(ButtonStyled)`
height: 50px;
width: 190px;
font-size: 20px;
`

const UserListDiv = styled.div`
height: 450px;
width: 410px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
h3{
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 500;
    align-self: flex-start;
    padding-left: 50px;
}
`