import './App.css';
import styled from 'styled-components';
import React from 'react';
import CreateTask from './CreateTask';
import ActiveTask from './ActiveTask';
import { useSelector } from 'react-redux';
import CompletedTasks from './CompletedTasks';

const Contaienr = styled.div`
  max-width: 60%;
  margin: auto;
  h1{
    text-align: center;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 600px){
    max-width: 80%;
  }
  @media only screen and (max-width: 370px){
    max-width: 90%;
  }
`;

function App() {
  const { active_tasks, completed_tasks } = useSelector(state => state.task)
  console.log(active_tasks)
  return (
    <Contaienr>
      <h1>todo-list</h1>
      <CreateTask />
      <ActiveTask active_tasks={ active_tasks }/>
      <CompletedTasks completed_tasks={completed_tasks} />
      
    </Contaienr>
  );
}

export default App;
