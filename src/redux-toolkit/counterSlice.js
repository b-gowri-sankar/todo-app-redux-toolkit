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
        console.log(action.payload)

        state.completed_tasks = [
            action.payload,
            ...state.completed_tasks
        ]
        state.active_tasks = [
            ...state.active_tasks.filter(task => task.id !== action.payload.id)
        ]
      },
    undoneTask: (state, action) => {
        state = {
            ...state,
            active_tasks: [
                action.payload,
                ...state.active_tasks
            ],
            completed_tasks: [
                ...state.completed_tasks.filter(task => task.id !== action.payload.id)
            ]
        }
      },
    removeTask: (state, action) => {
        state = 
            {
                ...state,
                completed_tasks: [
                    ...state.completed_tasks.filter(task => task.id !== action.payload)
                ]
            }
      },
    removeAllTasks: (state) => {
       state= {
            ...state,
            completed_tasks:[]
        }
    },
  },
})

export const { addTask, removeAllTasks, removeTask, undoneTask, completeTask } = counterSlice.actions

export default counterSlice.reducer