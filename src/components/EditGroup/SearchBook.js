import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function SearchBookList({id, urlImage, title, author, setSelected}){
    const navigate = useNavigate();

    function selectBook(){
        setSelected({
            id,
            urlImage,
            title,
            author
        });
    }

    return(
        <SearchBookLi>
            <img src={urlImage} alt="livro" onClick={() => selectBook()}/>
            <p>{title}</p>
        </SearchBookLi>
    )
}

const SearchBookLi = styled.li`
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