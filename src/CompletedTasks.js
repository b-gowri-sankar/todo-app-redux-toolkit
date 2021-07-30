import React from 'react'
import { Container } from './ActiveTask'
import { removeAllTasks, removeTask, undoneTask } from './redux-toolkit/counterSlice'
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

const Button = styled.button`
    border: none;
    background-color: #ed5249;
    color: white;
    padding: 5px 10px;
    float: right;
    cursor: pointer;
    &:hover{
        background-color: #bb321f;
    }
`;

const CompletedTasks = ({ completed_tasks }) => {
    const dispatch = useDispatch()
    console.log(completed_tasks)
    return (
        <>
        {
        completed_tasks && completed_tasks.map(task =>
        <Container key={task.id} >
                <input type="checkbox" id={task.id} name={task.task} value={task.task} checked={true} readOnly onClick={()=> dispatch(undoneTask(task)) }/>
                <label htmlFor={task.id} className='completed'> {task.task} </label>
                <img src='./images/remove.svg' alt='remove' width="18px" height='18px' onClick={ ()=> dispatch(removeTask(task.id)) }/>
        </Container>
        )
            }
            {completed_tasks.length > 0 && <Button onClick={ ()=>{ dispatch(removeAllTasks())} }>Delete Completed</Button>}
    </>
    )
}

export default CompletedTasks
