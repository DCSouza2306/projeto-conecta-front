import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import ButtonStyled from "../../Layout/ButtonStyled";
import { Member } from "./Member";

export function MemberList(){
    const {groupData} = useContext(GroupContext);
    const members = groupData?.Members
    return(
        <Wrapper>
            <h3>Membros</h3>
            <ul>
            {members?.map((e) => {
                return(
                    <Member
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    urlImage={e.urlImage}
                    position={e.position}
                     />
                )
            })}
            </ul>
            {members?.length > 4 ? <ButtonShowUser>Exibir todos</ButtonShowUser> : <></>}
            
        </Wrapper>
    )
}

const ButtonShowUser = styled(ButtonStyled)`
height: 50px;
width: 190px;
font-size: 20px;
`

const Wrapper = styled.div`
height: 450px;
width: 410px;
display: flex;
flex-direction: column;
align-items: center;
h3{
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 500;
    align-self: flex-start;
    padding-left: 50px;
}

ul{
    height: 350px;
    width: 350px;
}
`