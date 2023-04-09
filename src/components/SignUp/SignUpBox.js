import Box from "../Layout/Box";
import styled from "styled-components";
import { useState } from "react";
import ButtonStyled from "../Layout/ButtonStyled";

export function SignUpBox() {
 const [user, setUser] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [urlImage, setUrlImage] = useState("");
 return (
  <SignUpBoxDiv>
   <form>
    <div>
     <label for="User">Nome de Usuario</label>
     <input
      type="text"
      id="User"
      value={user}
      onChange={(e) => setUser(e.target.value)}
      required
     ></input>
    </div>
    <div>
     <label for="Email">Email</label>
     <input
      type="email"
      id="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
     ></input>
    </div>
    <div>
     <label for="Password">Senha</label>
     <input
      type="password"
      id="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
     ></input>
    </div>
    <div>
     <label for="UrlImage">Url Avatar</label>
     <input
      type="url"
      id="UrlImage"
      value={urlImage}
      onChange={(e) => setUrlImage(e.target.value)}
      required
     ></input>
    </div>

    <ButtonSignUp>Cadastrar</ButtonSignUp>
   </form>
  </SignUpBoxDiv>
 );
}

const SignUpBoxDiv = styled(Box)`
 width: 780px;
 height: 660px;
 margin-top: 3rem;
 form {
  width: 620px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
   margin-top: 2rem;
  }

  label {
   font-size: 1.3rem;
  }
  input {
   font-family: "Raleway", sans-serif;
   font-size: 1.3rem;
   width: 620px;
   height: 50px;
   margin-top: 1rem;
   border-radius: 5px;
   :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
   }
  }
 }
`;

const ButtonSignUp = styled(ButtonStyled)`
width: 285px;
height: 60px;
font-size: 1.8rem;
margin-top: 2rem;
`