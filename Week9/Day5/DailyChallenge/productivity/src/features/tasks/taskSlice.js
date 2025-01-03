import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";
import initList from "./initList";

const initialState = {
    tasks: initList.map(function (task) {
        const withId = {...task, id: nanoid()}
        return withId;
    }),
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action) => {
            state.tasks.push({...action.payload, id: nanoid(), checked: false})
        },
        edit: (state, action) => {
            const idx = state.tasks.findIndex(({id}) => id === action.payload.id)
            state.tasks[idx] = {...state.tasks[idx], ...action.payload}
        },
        remove: (state, action) => {
            state.tasks = state.tasks.filter(({id}) => id !== action.payload.id)
        }
    }
})


export const selectAllTasks = (state) => state.tasks.tasks
export const selectAllTasksSorted = createSelector(
    [selectAllTasks],
    (tasks) => {
        const tsk = [...tasks]
        tsk.sort( (a, b) => new Date(b.date) - new Date(a.date))
        return tsk;
    }
)

export const selectGroupedTasks = createSelector(
    [selectAllTasks],
    (tasks) => {
        const groups = Object.entries(Object.groupBy(tasks, ({date}) => date))
        groups.sort((a,b) => new Date(b[0]) - new Date(a[0]))
        console.log(groups)
        return groups.map(([date, tasks]) => {
            return {
                date, 
                tasks,
                isWhen: isWhen(date) // behind, today, ahead
            }}
        );
    }
)

export const selectCategories = createSelector(
    [selectAllTasks],
    (tasks) => [...new Set(tasks.map(task => task.category))]
)

export const {add, edit, remove} = taskSlice.actions;
export default taskSlice.reducer;

function isToday(date){
    const dt = new Date(date)
    const today = new Date() 

    return (
        dt.getFullYear() == today.getFullYear()
        && dt.getMonth() == today.getMonth()
        && dt.getDate() == today.getDate()
    )
}

function isWhen(date){
    const dt = new Date(date)
    const today = new Date()

    if(
        dt.getFullYear() == today.getFullYear()
        && dt.getMonth() == today.getMonth()
        && dt.getDate() == today.getDate()

    ){
        return 'today'
    }
    else if(dt < today){
        return 'behind'
    }
    else {
        return 'ahead'
    }
    
    

}