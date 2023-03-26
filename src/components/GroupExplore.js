import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";

export function GroupExplore() {
 return (
  <GroupExploreDiv>
   <div className="image-text-group-explore">
    <img
     src="https://ayine.com.br/wp-content/uploads/2022/03/Miolo-diagonal-O-livro-dos-amigos-site.png"
     alt="livro"
    />
    <div className="text-group-explore">
     <h3>Grupo de Fantasia</h3>
     <p>Grupo de leitura de fantasia medieval</p>
    </div>
   </div>
   <div className="group-status-explore">
    <AiFillCheckCircle className="icon-open-explore" />
    <p>Open</p>
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
    color: #8AB799;
    p{
        font-size: 24px;
    }

    .icon-open-explore{
        font-size: 40px;
        margin-right: 20px;
    }
 }
`;
