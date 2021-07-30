import React from 'react'
import { completeTask } from './redux-toolkit/counterSlice'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

export const Container = styled.div`
    background-color: beige;
    margin-bottom: 5px;
    padding: 10px;
    input[type=checkbox]{
       transform: scale(1.4);
    }
    label{
        font-size: 18px;
        text-transform: capitalize;
        margin-left: 10px;
    }
    .completed{
        text-decoration:line-through;
    }
    img{
        float: right;
        cursor: pointer;
    }
`;

const ActiveTask = ({active_tasks}) => {
    const dispatch = useDispatch()

    return (
        <>
            {active_tasks && active_tasks.map(task =>
                <Container key={task.id}>
                <input type="checkbox" id={task.id} name={task.task} value={task.task} onClick={() => dispatch(completeTask(task))} checked={ false } readOnly/>
                <label htmlFor={task.id} > {task.task} </label>
            </Container>
            )}
        </>
    )
}

export default ActiveTask

