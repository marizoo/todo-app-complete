import React, {useState} from 'react'
import styled from 'styled-components';
import { centerIt, columnIt } from '../globalStyle';
import Button from '../UI/Button';
import { ErrorModal } from '../UI/ErrorModal';

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

const AddList = ({onCloseTheForm, onNewTasks}) => {
    const [addTask, setAddTask] = useState("")
    const [errors, setErrors] = useState()

    const addTaskHandler = (ev) => {
        setAddTask(ev.target.value)
    }

    const submitHandler = (ev) => {
        ev.preventDefault()

        if(addTask.trim().length === 0) {
            setErrors({
                title: 'Oopsie Daisies..',
                message: 'Please enter valid input my love!'
            })
            return;
        }

        const newTasks = {
            task: addTask,
            id : Math.floor(Math.random() * 10000),
            reminder: false
        }

        onNewTasks(newTasks)
        setAddTask("")

    }

const closeTheForm = (ev) => {
    onCloseTheForm(ev)
}

const closeError = () => {
    setErrors(null)
}

 return (
     <>
        {errors && (
            <ErrorModal 
            title={errors.title}
            message={errors.message}
            onCloseError={closeError}
            />
        )}
        <Form onSubmit={submitHandler}>
            <Input
            name='addTask'
            placeholder='add tasks'
            type='text'
            value={addTask}
            onChange={addTaskHandler}
            />
            <ButtonContainer>
                <Button type="submit">Add Task</Button>
                <Button onClick={closeTheForm} bg='black'>Cancel</Button>
            </ButtonContainer>
        </Form>
        </>
    )
}

export default AddList
