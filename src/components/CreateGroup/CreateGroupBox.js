import styled from "styled-components";
import ButtonStyled from "../Layout/ButtonStyled";
import { useState } from "react";
import { useCreateGroup } from "../../hooks/api/useGroups";
import { useContext } from "react";
import UserContext from "../../context/userContext"
import Swal from "sweetalert2";

export function CreateGroupBox() {
 const [name, setName] = useState("");
 const [description, setDescription] = useState("");
 const [about, setAbout] = useState("");
 const [urlImage, setUrlImage] = useState("");

 const {userProfileData} = useContext(UserContext);
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
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data}`,
      })
  }

 }
 return (
  <CreateGroupBoxDiv>
   <form onSubmit={submit}>
    <div className="left-right-form">
     <div className="form-group-left">
      <div>
       <label htmlFor="Name">Nome do grupo</label>
       <input
        type="text"
        id="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
       ></input>
      </div>
      <div>
       <label htmlFor="Description">Descrição</label>
       <input
        type="text"
        id="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
       ></input>
      </div>
      <div>
       <label htmlFor="Image">Imagem do grupo</label>
       <input
        type="text"
        id="Image"
        value={urlImage}
        onChange={(e) => setUrlImage(e.target.value)}
        required
       ></input>
      </div>
     </div>
     <div>
      <label htmlFor="About">Sobre o grupo</label>
      <textarea
       type="text"
       id="About"
       value={about}
       onChange={(e) => setAbout(e.target.value)}
       required
      ></textarea>
     </div>
    </div>

    <ButtonCreateGroup type="submit" disabled={groupLoading}>
     Criar Grupo
    </ButtonCreateGroup>
   </form>
  </CreateGroupBoxDiv>
 );
}

const CreateGroupBoxDiv = styled.div`
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

  div {
   display: flex;
   flex-direction: column;
   margin-top: 2rem;
  }
  label {
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
