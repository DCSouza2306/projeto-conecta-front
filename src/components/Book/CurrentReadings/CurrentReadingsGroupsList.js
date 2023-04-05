import styled from "styled-components";
import Box from "../../Layout/Box";
import { CurrentGroup } from "./CurrentGroup";
import { useContext } from "react";
import BookContext from "../../../context/bookContext";
import ButtonStyled from "../../Layout/ButtonStyled";

export function CurrentReadingsGroupsList() {
 const { bookData } = useContext(BookContext);
 return (
  <CurrentReadingsGroupsListDiv>
   <div className="current-list-container">
    {bookData?.CurrentReadings.map((e) => {
     return (
      <CurrentGroup
       key={e.id}
       id={e.id}
       name={e.name}
       urlImage={e.urlImage}
       groupStatus={e.groupStatus}
      />
     );
    })}
   </div>
   <ButtonShowAllCurrent disabled={bookData?.CurrentReadings.length < 2}>
    Exibir todos
   </ButtonShowAllCurrent>
  </CurrentReadingsGroupsListDiv>
 );
}

const CurrentReadingsGroupsListDiv = styled(Box)`
 height: 280px;
 width: 285px;
 flex-direction: column;
 align-items: center;

 .current-list-container {
  height: 200px;
 }
`;

const ButtonShowAllCurrent = styled(ButtonStyled)`
 margin-top: 1rem;
 width: 200px;
 height: 40px;
 font-size: 1.25rem;

 :disabled {
  visibility: hidden;
 }
`;
