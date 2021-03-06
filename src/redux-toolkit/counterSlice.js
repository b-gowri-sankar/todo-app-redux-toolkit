import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active_tasks: [],
    completed_tasks: []
}

export const counterSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.active_tasks = [
        action.payload,
        ...state.active_tasks
    ]
    },
    completeTask: (state, action) => {
        // console.log(action.payload)

        state.completed_tasks = [
            action.payload,
            ...state.completed_tasks
        ]
        state.active_tasks = [
            ...state.active_tasks.filter(task => task.id !== action.payload.id)
        ]
      },
      undoneTask: (state, action) => {        
        state.active_tasks = [
            action.payload,
            ...state.active_tasks
        ]
        state.completed_tasks = [
            ...state.completed_tasks.filter(task => task.id !== action.payload.id)
        ]
      },
      removeTask: (state, action) => {
        
        state.completed_tasks = [
            ...state.completed_tasks.filter(task => task.id !== action.payload)
        ]
      },
    removeAllTasks: (state) => {
        state.completed_tasks= []
    },
    updateTask: (state, action) => {
        
        let index = state.active_tasks.findIndex(obj => obj.id === action.payload.id)
        
        state.active_tasks[index].task = action.payload.task

        console.log('this is counter slice', action.payload.id)

        state.active_tasks = [
            ...state.active_tasks
        ]    
    }
  },
})

export const { addTask, removeAllTasks, removeTask, undoneTask, completeTask, updateTask } = counterSlice.actions

export default counterSlice.reducer