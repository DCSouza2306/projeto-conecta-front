import { Header } from "../../components/Header/Header";
import styled from "styled-components";
import Container from "../../components/Layout/Container";
import { CreateGroupBox } from "../../components/CreateGroup/CreateGroupBox";

export function CreateGroup(){
    return(
        <>
        <Header />
        <CreateGroupSection>
            <h1>Criar novo grupo</h1>
            <CreateGroupBox />
        </CreateGroupSection>
        </>
    )
}

const CreateGroupSection = styled(Container)`
h1 {
  padding-top: 3rem;
  margin-bottom: 1rem;
  font-size: 3rem;
  text-align: center;
 }

`