import styled from "styled-components";
import ButtonStyled from "../ButtonStyled";
import { User } from "./User";

export function UserList(){
    return(
        <UserListDiv>
            <h3>Membros</h3>
            <User />
            <User />
            <User />
            <User />
            <User />
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

    font-size: 28px;
    font-weight: 500;
    align-self: flex-start;
    padding-left: 50px;
}
`