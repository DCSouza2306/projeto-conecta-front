import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function UserBook({id, urlImage, title}){
    const navigate = useNavigate()

    function navigateBook(){
        navigate(`/explore/book/${id}`)
    }
    return(
        <UserBookLi>
            <img src={urlImage} alt="livro" onClick={() => navigateBook()}/>
            <p>{title}</p>
        </UserBookLi>
    )
}

const UserBookLi = styled.li`
height: 255px;
margin-right: 2rem;
    img{
        width: 120px;
        height: 172px;
        border-radius: 5px;
        margin-bottom: 1rem;
        cursor: pointer;
    }

    p{
        font-size: 1.25rem;
    }
`