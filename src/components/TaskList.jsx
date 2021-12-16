import React from 'react'
import styled from 'styled-components';
import { centerIt } from '../globalStyle';

const UL = styled.ul`
width: 90%;
list-style: none;
`;

const ListContainer = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
height: 40px;
`;


const LI = styled.li`
flex: 10;
font-size: 16px;
padding-left: 10px;
display: flex;
align-items: center;
`;

const Delete = styled.button`
flex: 2;
border: none;
background: none;
font-size: 18px;
font-weight: 600;
color: red;
${centerIt};
cursor: pointer;
`

const TaskList = ({datas, ondeleteThis}) => {
    return (
        <UL>
        {datas.map(data => (
            <ListContainer key={data.id}>
            <LI>{data.task}</LI>
            <Delete onClick={() => ondeleteThis(data.id)}>x</Delete>
           </ListContainer> 
        ))}
           
        </UL>
    )
}

export default TaskList
