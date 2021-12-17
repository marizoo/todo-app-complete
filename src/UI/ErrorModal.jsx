import React from "react";
import ReactDOM from 'react-dom'
import styled from "styled-components";
import { centerIt } from "../globalStyle";
import Button from "./Button";
import Card from "./Card";

const OverlayContainer = styled.div`
height: 100vh;
width: 100vw;
position: fixed;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.85);
z-index: 5;
`

const Overlay = () => {
    return (
        <OverlayContainer/>
    )
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
background: transparent;
/* top: 40%;
left: 50%; */
${centerIt};
z-index: 6;
`

const Title = styled.h2`
Color: Purple;
font-weight: 700;
margin-bottom: 20px;
`
const Message = styled.p`
font-size: 18px;
`

const Modal = ({title, message, onCloseError}) => {
    return (
        <ModalContainer onClick={onCloseError}>
            <Card>
                <Title>{title}</Title>
                <Message>{message}</Message>
                <Button onClick={onCloseError}>Okay</Button>
            </Card>
        </ModalContainer>
    )
}

export const ErrorModal = ({title, message, onCloseError}) => {
return (
<>
    {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById('overlay-root')
)}
{ReactDOM.createPortal(
    <Modal 
    title={title}
    message={message}
    onCloseError={onCloseError}
    />,
    document.getElementById('modal-root')
)}
</>
)
}