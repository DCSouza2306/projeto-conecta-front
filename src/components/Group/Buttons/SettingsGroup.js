import styled from "styled-components";

export function Options({ display, role }) {
 return (
  <OptionsDiv displayDiv={display}>
   <ul>
    {(role === "owner" || role === "administrator") && <li>Editar Grupo</li>}
    {(role === "owner" || role === "administrator") && <li>Solicitações</li>}
    {(role === "member" || role === "administrator") && <li>Sair do grupo</li>}
   </ul>
  </OptionsDiv>
 );
}

const OptionsDiv = styled.div`
 width: 375px;
 min-height: 50px;
 max-height: ${props => props.displayDiv ? "110px" : "50px"};
 background-color: #5c548c;
 position: absolute;
 right: 388px;
 top: 250px;
 border-radius: 0 0 50px 50px;
 color: #FFFFFF;
 transition: height 1s, transform 1s;
 transform: ${props => props.displayDiv ? "" : "translate(0, -40px)"};
 visibility: ${(props) => (props.displayDiv ? "" : "hidden")};
 display: flex;
 justify-content: center;
 ul{
    font-size: 1.3rem;
    margin-bottom: 1rem;
    li{
        margin-top: 0.5rem;
        :hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }
 }
`;
