import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTask } from './redux-toolkit/counterSlice';
import styled from 'styled-components';


const Form = styled.form`
  display: flex;
  margin-bottom: 30px;
  input{
    flex-basis: 80%;
    width: 100%;
    padding-left: 5px;
    font-size: 15px;
    letter-spacing: .02em;
    border: 1px solid black;
    &:focus{
      outline: none;
      outline: blue;
    }
  }
  button{
    margin-left: 10px;
    padding: 10px;
    background-color: #464775;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 12px;
  }
  @media only screen and (max-width: 600px){
    input{
      flex-basis: 60%;
    }
  }
`;

const CreateTask = () => {
  const [task, setTask] = React.useState('');
  const dispatch = useDispatch()
    return (
        <Form onSubmit={(e) => {
            e.preventDefault()
            let id = uuidv4()
            dispatch(addTask({ task, id }))
            setTask('')
          }}>
            <input placeholder='add task' value={task} type='text' onChange={(e) => setTask(e.target.value)} />
            <button>Add Task</button>
          </Form>
    )
}

export default CreateTask
