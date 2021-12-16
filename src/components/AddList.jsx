import React, {useState} from 'react'
import styled from 'styled-components';
import { centerIt, columnIt } from '../globalStyle';
import Button from '../UI/Button';

const Form = styled.form`
width: 90%;
margin: 20px 0;
${columnIt};
align-items: center;
`

const Input = styled.input`
height: 40px;
width: 100%;
border: 1px solid rgba(0, 0, 0, 0.7);
padding-left: 10px;
display: flex;
align-items: center;
font-size: 18px;
font-weight: 300;
border-radius: 10px;

&:focus {
    outline: none;
}
`

const ButtonContainer = styled.div`
width: 90%;
${centerIt};
`

const AddList = ({onCloseTheForm}) => {
    const [addTask, setAddTask] = useState("")

    const addTaskHandler = (ev) => {
        setAddTask(ev.target.value)
    }

    const submitHandler = (ev) => {
        ev.preventDefault()

    }

const closeTheForm = (ev) => {
    onCloseTheForm(ev)
}

    return (
        <Form onSubmit={submitHandler}>
            <Input
            name='addTask'
            placeholder='add tasks'
            type='text'
            required
            value={addTask}
            onChange={addTaskHandler}
            />
            <ButtonContainer>
                <Button type="submit">Add Task</Button>
                <Button onClick={closeTheForm} bg='black'>Cancel</Button>
            </ButtonContainer>
        </Form>
    )
}

export default AddList
