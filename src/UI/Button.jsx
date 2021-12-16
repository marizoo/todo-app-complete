import React from 'react'
import styled from 'styled-components';
import { centerIt } from '../globalStyle';

const Container = styled.button`
padding: 8px 10px;
background-color: ${props => props.bg};
color: white;
font-size: 16px;
font-weight: 500;
border-radius: 10px;
margin: 30px;
${centerIt};
border: none;
cursor: pointer;
`;


const Button = (props) => {
    return (
        <Container type={props.type || 'button'} onClick={props.onClick} bg={props.bg || 'purple'}>
            {props.children}
        </Container>
    )
}

export default Button
