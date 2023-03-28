import styled from "styled-components";
import Box from "../../Box";
import ButtonStyled from "../../ButtonStyled";

export function MettingBox(){
    return (
        <MettingBoxDiv>
            <div className="metting-informations">
                <p>Data</p>
                <p>24/04/2023</p>
            </div>
            <div className="metting-informations">
                <p>Horario</p>
                <p>19:00</p>
            </div>
            <div className="metting-informations">
                <p>Link</p>
                <p>www.reuniãogweegweg</p>
            </div>
            <div className="metting-informations">
                <p>Mediador</p>
                <p>Usuario</p>
            </div>

            <ButtonConfirmMetting>Confirmar Participação</ButtonConfirmMetting>

        </MettingBoxDiv>
    )

}

const MettingBoxDiv = styled(Box)`
width: 365px;
flex-direction: column;
height: 330px;
padding: 30px;
margin-top: 30px;

.metting-informations{
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-bottom: 30px;

    p{
        width: 125px;
        overflow: hidden;
    }
}
`;

const ButtonConfirmMetting = styled(ButtonStyled)`
    width: 285px;
    height: 50px;
    font-size: 20px;
`