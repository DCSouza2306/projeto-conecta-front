import styled from "styled-components";
import ButtonStyled from "../Layout/ButtonStyled";
import { useState } from "react";
import { useCreateGroup } from "../../hooks/api/useGroups";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import GroupContext from "../../context/groupContext";

export function EditGroupBox() {
 const { groupId } = useParams();
 const { setGroupData, groupData } = useContext(GroupContext);
 console.log(groupData);
 const [name, setName] = useState(groupData?.name);
 const [description, setDescription] = useState(groupData?.description);
 const [about, setAbout] = useState(groupData?.about);
 const [urlImage, setUrlImage] = useState(groupData?.urlImage);

 const { userProfileData } = useContext(UserContext);
 const token = userProfileData.token;

 const { groupLoading, groupError, createGroup } = useCreateGroup();

 async function submit(e) {
  e.preventDefault();
  const body = {
   name,
   description,
   about,
   urlImage,
   status: "OPEN",
  };

  try {
   await createGroup(body, token);
   alert("deu certinho");
  } catch (error) {
   Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${error.response.data}`,
   });
  }
 }
 return (
  <EditGroupBoxDiv>
   <form onSubmit={submit}>
    <div className="left-right-form">
     <div className="form-group-left">
      <LabelInputDiv>
       <label htmlFor="Name">Nome do grupo</label>
       <input
        type="text"
        id="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
       ></input>
      </LabelInputDiv>
      <LabelInputDiv>
       <label htmlFor="Description">Descrição</label>
       <input
        type="text"
        id="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
       ></input>
      </LabelInputDiv>
      <LabelInputDiv>
       <label htmlFor="Image">Imagem do grupo</label>
       <input
        type="text"
        id="Image"
        value={urlImage}
        onChange={(e) => setUrlImage(e.target.value)}
        required
       ></input>
      </LabelInputDiv>
     </div>
     <div className="form-group-right">
      <LabelInputDiv>
       <label htmlFor="About">Sobre o grupo</label>
       <textarea
        type="text"
        id="About"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        required
       ></textarea>
      </LabelInputDiv>

      <LabelInputDiv colorButton={groupData?.status == "OPEN" ? "#E95A5A" : "#83B147"}>
       <h4>Status do grupo</h4>
       <div className="status-group-options">
        {groupData?.status === "OPEN" &&  <p className="group-status"> Aberto</p>}
        {groupData?.status === "CLOSED" &&  <p className="group-status"> Fechado</p>}

        {groupData?.status === "OPEN" &&  <button>Fechar Grupo</button>}
        {groupData?.status === "CLOSED" &&  <button>Abrir Grupo</button>}

       
        
       </div>
      </LabelInputDiv>
     </div>
    </div>

    <ButtonCreateGroup type="submit" disabled={groupLoading}>
     Salvar
    </ButtonCreateGroup>
   </form>
  </EditGroupBoxDiv>
 );
}

const EditGroupBoxDiv = styled.div`
 form {
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 .left-right-form {
  width: 100%;
  display: flex;
  justify-content: space-around;

  .form-group-left {
   margin-top: 0;
  }

 

  #open {
   width: 50px;
  }

  label,
  h4 {
   font-size: 1.3rem;
  }
  input {
   font-family: "Raleway", sans-serif;
   font-size: 1.3rem;
   width: 520px;
   height: 50px;
   margin-top: 1rem;
   border-radius: 5px;
   border: 1px solid #8e82d9;
   :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
   }
  }
 }

 #About {
  font-family: "Raleway", sans-serif;
  font-size: 1.3rem;
  width: 520px;
  height: 176px;
  margin-top: 1rem;
  border-radius: 5px;
  border: 1px solid #8e82d9;

  :focus {
   box-shadow: 0 0 0 0;
   outline: 0;
  }
 }
`;

const ButtonCreateGroup = styled(ButtonStyled)`
 height: 80px;
 width: 380px;
 font-size: 2rem;
 margin-top: 2rem;
`;

const LabelInputDiv = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 2rem;

 .status-group-options {
   display: flex;
   align-items: flex-end;
   margin-top: 0.5rem;
   .group-status {
    font-size: 2rem;
   }

   button{
    font-family: "Raleway", sans-serif;
    border: none;
    background-color: ${props => props.colorButton};
    font-size: 1.3rem;
    height: 40px;
    width: 150px;
    margin-left: 2rem;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
   }
  }
`;
