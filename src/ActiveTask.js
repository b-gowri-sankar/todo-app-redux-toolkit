import React from 'react'
import { completeTask, updateTask } from './redux-toolkit/counterSlice'
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
    .update{
        font-size: 18px;
        width: 80%;
        border: 1px solid black;
        padding: 5px;
        &:focus{
            outline: none;
        }
    }
    .update-button{
        background-color: #464775;
        border: none;
        font-size: 18px;
        margin-left: 20px;
        padding: 5px 10px;
        border-radius: 12px;
        cursor: pointer;
        color: white;
    }
`;

const UPDATE = styled.div`
    display: flex;
`;

const ActiveTask = ({active_tasks}) => {
    const dispatch = useDispatch()
    const [showInput, setShowInput] = React.useState(-1);
    const [updateValue, setUpdateValue] = React.useState('')
    return (
        <>
            {active_tasks && active_tasks.map(task =>
                <Container key={task.id}>
                    {showInput !== task.id && <>
                    <input type="checkbox" id={task.id} name={task.task} value={task.task} onClick={() => dispatch(completeTask(task))} checked={ false } readOnly/>
                    <label htmlFor={task.id} > {task.task} </label>
                    <img src='./images/edit.svg' id={task.id} alt='edit'
                        onClick={(e) => {
                            setShowInput(e.target.id)
                            setUpdateValue(task.task)
                        }} />    
                    </>}
                    {showInput === task.id && <UPDATE>
                        <input type='text' id={task.id} value={updateValue} className='update' onChange={(e)=>setUpdateValue(e.target.value) }/>
                        <button className='update-button' id={task.id}
                            onClick={(e) => {
                                console.log('this is id', e.target.id)
                                dispatch(updateTask({ id: e.target.id, task: updateValue }))
                                setShowInput(-1)
                            }}>Update</button>
                    </UPDATE>}
                </Container>
            )}
        </>
    )
}

export default ActiveTask

