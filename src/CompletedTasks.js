import React from 'react'
import { Container } from './ActiveTask'

// import { useDispatch } from 'react-redux';
const CompletedTasks = ({ completed_tasks }) => {
    // const dispatch = useDispatch()
    return (
        <>
        {
        completed_tasks && completed_tasks.map(task =>
        <Container key={task.id} >
            <input type="checkbox" id={task.id} name={task.task} value={task.task} checked={ true } readOnly/>
            <label htmlFor={task.id} className='completed'> {task.task} </label>
        </Container>
        )
            }
    </>
    )
}

export default CompletedTasks
