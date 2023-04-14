import styled from "styled-components";
import Container from "../../components/Layout/Container";
import { Loading } from "../../components/Utils/Loading";
import {Header} from "../../components/Header/Header"

export function MyGroups(){
    return(
        <>
        <Header />
        <MyGroupsSection>
            <h1> Meus Grupos</h1>
        </MyGroupsSection>
        </>
    )
}

const MyGroupsSection = styled(Container)`
h1 {
  padding-top: 3rem;
  margin-bottom: 1rem;
  font-size: 3rem;
  text-align: center;
 }

`