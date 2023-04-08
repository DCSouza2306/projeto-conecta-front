import { Header } from "../../components/Header/Header";
import Container from "../../components/Layout/Container";
import styled from "styled-components";

import { useUser } from "../../hooks/api/useUser";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import UserContext from "../../context/userContext";

import { UserInfos } from "../../components/User/UserInfos";
import { UserGroups } from "../../components/User/UserGroups";
import { CurrentReadings } from "../../components/User/CurrentReadings";
import { NextReadings } from "../../components/User/NextReadings";

export function User() {
 const { userName } = useParams();
 const { setUserData } = useContext(UserContext);

 const { userData, userLoading, userError } = useUser(userName);

 useEffect(() => {
    setUserData(userData)
 }, [userLoading])
 return (
  <>
   <Header />
   <UserSection>
    <div className="user-section-left">
        <UserInfos />
        <UserGroups />
    </div>
    <div className="line-user-section"></div>
    <div className="user-section-right">
        <CurrentReadings />
        <NextReadings />
    </div>
   </UserSection>
  </>
 );
}


const UserSection = styled(Container)`
display: flex;
padding-top:4rem;
.user-section-left{
    width: 534px;
    height: 100%;
}
.user-section-right{
    width: 705px;
    height: 100%;
}

.line-user-section{
    width: 1px;
    height: 780px;
    background-color: #5C548C;
}
`
