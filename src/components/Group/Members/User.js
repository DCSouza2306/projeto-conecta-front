import styled from "styled-components";

export function User({id, name, urlImage, position}){
    return(
        <UserDiv>
            <img src={urlImage} alt="user" />
            <p>{name}</p>
            <p>{position}</p>
        </UserDiv>
    )
}

const UserDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 350px;
margin-bottom: 1.5rem;
img{
    border-radius: 100%;
    width: 60px;
}
`