import styled from "styled-components";
import Container from "../../components/Layout/Container";
import { Loading } from "../../components/Utils/Loading";
import {Header} from "../../components/Header/Header"
import { NavBarOptions } from "../../components/EditGroup/NavBarOptions";
import { useQuery } from "../../hooks/useQuery";
import { EditGroupBox } from "../../components/EditGroup/EditGroupInfos";

export function EditGroup(){
    const urlQuery = useQuery();
    const selected = urlQuery.get("options");
    
    return(
        <>
        <Header />
        <EditGroupSection>
            <h1> Editar Grupo</h1>
            <NavBarOptions />
            {selected === "infos" && <EditGroupBox />}
            {selected === "book-list" && <p> Listas </p>}
            {selected === "meeting" && <p> Reuniões</p>}
            {selected === "members" && <p> Membros</p>}
        </EditGroupSection>
        </>
    )
}

const EditGroupSection = styled(Container)`
h1 {
  padding-top: 3rem;
  margin-bottom: 1rem;
  font-size: 3rem;
  text-align: center;
 }

`