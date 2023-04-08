import styled from "styled-components";

export function BookTitleAndDate(props) {
 return (
  <BookTitleAndDateDiv>
   {props.children}
  </BookTitleAndDateDiv>
 );
}

const BookTitleAndDateDiv = styled.div`
 display: flex;
 justify-content: space-between;
 width: 500px;
 font-size: 20px;

 p:first-child {
  font-size: 28px;
  cursor: pointer;
 }
`;
