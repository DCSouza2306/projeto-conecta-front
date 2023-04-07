import { AiFillCheckCircle } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function CurrentGroup({id, name, urlImage, groupStatus}) {
  const navigate = useNavigate()
  function navigateGroup(){
    navigate(`/explore/group/${id}`)
  }
 return (
  <CurrentGroupLi>
   <img
    src={urlImage}
    alt="grupo de leitura"
    onClick={() => navigateGroup()}
   />
   <div className="name-status-group">
    <p>{name}</p>
    <div className="status-group-current">
     <AiFillCheckCircle />
     <p>{groupStatus === "OPEN" ? "Aberto" : "Fechado"}</p>
    </div>
   </div>
  </CurrentGroupLi>
 );
}

const CurrentGroupLi = styled.li`
 display: flex;
 justify-content: space-around;
 width: 270px;
 height: 90px;
 margin-bottom: 1rem;
 font-size: 1.15rem;

 p:first-child {
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
 }

 img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  cursor: pointer;
 }

 .status-group-current {
  color: #8ab799;
  display: flex;
  margin-top: 0.45rem;
  p{
    margin-left: 0.65rem;
  }
 }
`;
