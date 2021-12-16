import React from 'react'
import styled from 'styled-components';
import { centerIt } from '../globalStyle';
import Button from '../UI/Button';

const Container = styled.header`
display:flex;
align-items: center;
justify-content: space-between;
width: 90%;
height: 60px;
`;
const Title = styled.h2``;


const Header = ({onOpenForm}) => {

    const openTheForm = (ev) => {
        onOpenForm(ev)
    }

    return (
        <Container>
            <Title>Task Tracker</Title>
            <Button onClick={openTheForm}>Add</Button>
        </Container>
    )
}

export default Header
