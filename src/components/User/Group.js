import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function Group({id, urlImage, name, position}){
    const navigate = useNavigate();

    function navigateGroup(){
        navigate(`/explore/group/${id}`)
    }
    return (
        <GroupLi>
            <img src={urlImage} alt="logo grupo" onClick={() => navigateGroup()}/>
            <p onClick={() => navigateGroup()}>{name}</p>
            <span>{position}</span>
        </GroupLi>
    )
};

const GroupLi = styled.li`
margin-bottom: 1.5rem;
width: 505px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 1.5rem;

p, img{ 
    cursor: pointer;
}

img{
    width: 60px;
    border-radius: 100%;
}
`