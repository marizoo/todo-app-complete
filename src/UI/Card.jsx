import React from 'react'
import styled from 'styled-components';
import { columnIt } from '../globalStyle';

const Container = styled.div`
width: 400px;
background-color: white;
border-radius: 10px;
margin: 30px 0;
padding: 20px;
${columnIt};
align-items: center;
`;


const Card = (props) => {
    return (
        <Container>
            {props.children}    
        </Container>
    )
}

export default Card
