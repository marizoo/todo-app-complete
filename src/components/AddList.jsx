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
margin-bottom: 15px;

&:focus {
    outline: none;
}
`

const CheckboxContainer = styled.div``

const Label = styled.label`
margin-right: 10px;
`

const InputCheckbox = styled.input``

const ButtonContainer = styled.div`
width: 90%;
${centerIt};
`

const AddList = ({onCloseTheForm, onNewTasks}) => {
    const [addTask, setAddTask] = useState("")
    const [errors, setErrors] = useState()
    const [addReminder, setAddReminder] = useState(false)

    const addTaskHandler = (ev) => {
        setAddTask(ev.target.value)
    }

    const reminderHandler = (ev) => {
        setAddReminder(ev.currentTarget.checked)
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
            reminder: addReminder
        }

        onNewTasks(newTasks)
        setAddTask("")
        setAddReminder(false)
        

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
            <CheckboxContainer>
                <Label htmlFor='reminder'>Set Reminder: </Label>
                <InputCheckbox 
                id='reminder'
                type='checkbox'
                checked={addReminder}
                value={addReminder}
                onChange={reminderHandler}
                />
            </CheckboxContainer>
            
            <ButtonContainer>
                <Button type="submit">Add Task</Button>
                <Button onClick={closeTheForm} bg='black'>Cancel</Button>
            </ButtonContainer>
        </Form>
        </>
    )
}

export default AddList
