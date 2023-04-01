import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import { NextReadingsBox } from "./NextReadingsBox";
import { NoNextReadings } from "./NoNextReadings";


export function NextReadings(){
    const { groupData } = useContext(GroupContext);
    const nextReadings = groupData?.NextReadings;
    console.log(nextReadings);
    return(
        <NextReadingsDiv>
            <h3>Proximas leituras</h3>
            {nextReadings?.length > 0 ?   <NextReadingsBox />  : <NoNextReadings/>}
          
        </NextReadingsDiv>
    )
}

const NextReadingsDiv = styled.div`
width: 830px;
height: 800px;
display: flex;
flex-direction: column;

h3{
    margin-top: 30px;
    font-size: 28px;
    font-weight: 500;
    padding-left: 50px;
}
`


