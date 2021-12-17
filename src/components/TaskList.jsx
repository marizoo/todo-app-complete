import React, {useState} from 'react'
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
background-color: #dbdbdb;
margin-bottom: 15px;
border-radius: 10px;
cursor: pointer;

&.reminder {
    display: flex;
align-items:center;
justify-content: space-between;
height: 40px;
background-color: #c3f1b7;
margin-bottom: 15px;
border-radius: 10px;
cursor: pointer;
}
`;



const LI = styled.li`
flex: 10;
font-size: 16px;
padding-left: 30px;
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

const TaskList = ({datas, ondeleteThis, onReminderToggle}) => {
    
    const reminderToggle = (id) => {
        onReminderToggle(id)
    }

    return (
        <UL>
            {datas.length > 0 ? (
                datas.map(data => (
                    <ListContainer 
                    key={data.id} 
                    onDoubleClick={() => reminderToggle(data.id)} 
                    className={`${data.reminder ? 'reminder' : ''}`}
                    >
                    
                    <LI>{data.task}</LI>
                    <Delete onClick={() => ondeleteThis(data.id)}>x</Delete>
                </ListContainer> 
                ))
            ) : <div>No tasks boss!</div>}
           
        </UL>
    )
}

export default TaskList
