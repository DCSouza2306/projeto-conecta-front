import { Header } from "../../components/Header/Header";
import Container from "../../components/Layout/Container";
import styled from "styled-components";
import { LoginBox } from "../../components/Login/LoginBox";

export function Login(){
    return(
        <>
        <Header />
        <LoginSection>
            <h1>Login</h1>
            <LoginBox />
        </LoginSection>
        </>
    )
}

const LoginSection = styled(Container)`
padding-top: 3rem;
display: flex;
flex-direction: column;
align-items: center;
h1 {
   font-size: 3rem;
  }

`