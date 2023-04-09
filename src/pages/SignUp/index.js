import { Header } from "../../components/Header/Header";
import Container from "../../components/Layout/Container";
import styled from "styled-components";
import { SignUpBox } from "../../components/SignUp/SignUpBox";

export function SignUp(){
    return(
        <>
        <Header />
        <SignUpSection>
            <h1>Cadastro</h1>
            <SignUpBox />
        </SignUpSection>
        </>
    )
}

const SignUpSection = styled(Container)`
padding-top: 3rem;
display: flex;
flex-direction: column;
align-items: center;
h1 {
   font-size: 3rem;
  }

`