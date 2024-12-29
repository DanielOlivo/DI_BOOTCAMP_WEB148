import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            content: 'task 1',
            isDone: true
        },
        {
            content: 'task 2',
            isDone: false
        }
    ],
    filter: {
        active: true,
        completed: true
    }
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => {
            state.todos.push({content: action.payload, isDone: false})
        },
        edit: (state, action) => {
            const {idx, newContent} = action.payload
            state.todos[idx].content = newContent;
        },
        del: (state, action) => {
            const idx = action.payload;
            state.todos = state.todos.filter((item, i) => i !== idx)
        },
        toggleDone: (state, action) => {
            const idx = action.payload
            state.todos[idx].isDone = !state.todos[idx].isDone;
        },
        toggleActive: (state) => {
            state.filter.active = !state.filter.active;
        },
        toggleCompleted: (state) => {
            state.filter.completed = !state.filter.completed;
        }
    }
})

export const {add, edit, del, toggleDone, toggleActive, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;