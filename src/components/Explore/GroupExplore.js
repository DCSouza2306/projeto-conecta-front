import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export function GroupExplore({ id, name, description, urlImage, status }) {
 const navigate = useNavigate();
 function navigateGroup() {
  navigate("/groupId");
 }
 return (
  <GroupExploreDiv>
   <div className="image-text-group-explore">
    <img src={urlImage} />
    <div className="text-group-explore">
     <h3 onClick={() => navigateGroup()}>{name}</h3>
     <p>{description}</p>
    </div>
   </div>
   <div className="group-status-explore">
    <AiFillCheckCircle className="icon-open-explore" />
    <p>{status == "OPEN" ? "Aberto" : "Fechado"}</p>
   </div>
  </GroupExploreDiv>
 );
}

const GroupExploreDiv = styled.div`
 width: 1200px;
 height: 203px;
 background-color: #eaebec;
 margin: 30px auto;
 border-radius: 50px;
 display: flex;
 .image-text-group-explore {
  display: flex;
  align-items: center;
  height: 100%;
  width: 900px;
  padding-left: 50px;
  img {
   width: 100px;
   height: 100px;
   border-radius: 100%;
   margin-right: 50px;
  }

  .text-group-explore {
   h3 {
    font-size: 32px;
    margin-bottom: 30px;
    cursor: pointer;
   }

   p {
    font-size: 24px;
    color: #666666;
   }
  }
 }

 .group-status-explore {
  height: 100%;
  align-items: center;
  display: flex;
  color: #8ab799;
  p {
   font-size: 24px;
  }

  .icon-open-explore {
   font-size: 40px;
   margin-right: 20px;
  }
 }
`;
