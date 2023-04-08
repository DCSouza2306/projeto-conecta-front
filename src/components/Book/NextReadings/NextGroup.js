import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export function NextGroup({id, name, urlImage, groupStatus, startReading}) {
   const navigate = useNavigate();

   function navigateGroup(){
      navigate(`/explore/group/${id}`)
   }
 return (
  <NextGroupLi>
   <div className="image-name-group">
    <img
     src={urlImage}
     alt="logo grupo de leitura"
     onClick={() => navigateGroup()}
    />
    <p onClick={() => navigateGroup()}>{name}</p>
   </div>

   <p className="start-reading-group">{dayjs(startReading).format("DD/MM/YYYY")}</p>
   <div className="status-group">
    <AiFillCheckCircle />
    <p>{groupStatus === "OPEN" ? "Aberto" : "Fechado"}</p>
   </div>
  </NextGroupLi>
 );
}

const NextGroupLi = styled.li`
width: 830px;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 1.15rem;
margin-bottom: 0.65rem;
 img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  cursor: pointer;
 }

 .start-reading-group, .image-name-group, .status-group{
    width: 250px;
 }

 .start-reading-group{
    text-align: center;
 }

 .image-name-group {
  display: flex;
  align-items: center;
  justify-content: start;

  p{
    margin-left: 1.15rem;
    cursor: pointer;
  }
 }

 .status-group{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8ab799;
    p{
      margin-left: 0.65rem;
    }
 }
 
`;
