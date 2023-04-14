import Box from "../Layout/Box";
import styled from "styled-components";
import { useState } from "react";
import ButtonStyled from "../Layout/ButtonStyled";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import { useSignIn } from "../../hooks/api/useSignIn";
import Swal from 'sweetalert2'

export function LoginBox() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const { signInLoading, signIn } = useSignIn();

 const { setUserProfileData } = useContext(UserContext);
 const navigate = useNavigate();
 async function submit(e) {
  e.preventDefault();
  const body = { email, password };
  try {
   const data = await signIn(body);
   setUserProfileData(data);
   navigate("/");
  } catch (error) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data}`,
      })
  }
 }
 return (
  <LoginBoxDiv>
   <form onSubmit={submit}>
    <div>
     <label htmlFor="Email">Email</label>
     <input
      type="email"
      id="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
     ></input>
    </div>
    <div>
     <label htmlFor="Password">Senha</label>
     <input
      type="password"
      id="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
     ></input>
    </div>

    <ButtonLogin type="submit" disabled={signInLoading}>
     Entrar
    </ButtonLogin>
   </form>
   <p>
    <a href={"/sign-up"}>Não possui possui cadastro? Clique aqui...</a>
   </p>
  </LoginBoxDiv>
 );
}

const LoginBoxDiv = styled(Box)`
 width: 780px;
 height: 460px;
 margin-top: 3rem;
 flex-direction: column;
 align-items: center;
 a {
  cursor: pointer;
  text-decoration: none;
  :hover {
   text-decoration: underline;
  }
 }

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

const ButtonLogin = styled(ButtonStyled)`
 width: 285px;
 height: 60px;
 font-size: 1.8rem;
 margin-top: 2rem;
 margin-bottom: 2rem;
`;
