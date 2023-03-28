import styled from "styled-components";

export function User(){
    return(
        <UserDiv>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYN1UxVohzDwy6FsdwVAFzzXqh6PNR4o-TKiRzLe87FA&s" alt="user" />
            <p>Usuario</p>
            <p>Membro</p>
        </UserDiv>
    )
}

const UserDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 350px;

img{
    border-radius: 100%;
    width: 60px;
}
`