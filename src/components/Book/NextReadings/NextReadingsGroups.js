import NoNextReadingsGroups from "./NoNextReadingsGroups";
import { NextReadingsGroupsList } from "./NextRedingsGroupsList";
import styled from "styled-components";

export function NextReadingsGroups(){
    return(
        <NextReadingsGroupsDiv>
            <h3>Grupos que irão ler este livro</h3>
            <NextReadingsGroupsList />
        </NextReadingsGroupsDiv>
    )
}

const NextReadingsGroupsDiv = styled.div`
width: 905px;
height: 40vh;
h3{
    font-size: 1.8rem;
    text-align: center;
    padding-top: 1.7rem;
    margin-bottom: 1rem;
    height: 80px;
}
`