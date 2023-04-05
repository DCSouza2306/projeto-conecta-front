import styled from "styled-components";

export function Page(props){
    return(
        <PageDiv>
            {props.children}
        </PageDiv>
    )
}

const PageDiv = styled.div`
height: calc(100vh - 100px);
padding-top: 3rem;
margin-top: 100px;
`

export default PageDiv;