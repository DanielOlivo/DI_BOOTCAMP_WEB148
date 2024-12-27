import { useRef, useState, createContext, useReducer } from 'react';
import {FilterContextProvider} from './FilterContext';
import Filter from './Components/Filter';
import Item from './Components/Item';
import AddField from './Components/AddField';

function taskReducer(state, action){
    const {payload} = action;
    switch(action.type){
        case 'create':{
            return [...state, {
                value: action.payload.value !== undefined ? action.payload.value : '', 
                check: false
            }];
        }
        case 'check':
            return state.map((item, idx) => 
                idx == action.payload.idx ? {...item, check: action.payload.done} : item);
        case 'delete':
            return state.filter((item, i) => 
                i != action.payload.idx)
        case 'reorder':
            return state;
        case 'edit':
            return state.map((item, idx) => 
                idx == action.payload.idx ? {
                    ...item, 
                    value: action.payload.value || item.value,
                    check: action.payload.check !== undefined ? action.payload.check : item.check
                } : item);
        default:
            return state;
    }
}

const TaskContext = createContext();

const initState = [
    {
        value: 'first task',
        check: true
    },
    {
        value: 'second one',
        check: false
    }
]

function TaskManager(){
    const [todos, dispatch] = useReducer(taskReducer, initState);
    const ulRef = useRef()

    const add = (e) => {
        e.preventDefault(); 
        dispatch({type:'create', payload: {value: '', check: false}})
    }

    return (
        <div className='flex-col justify-start items-center'>
            <h2 className='text-6xl font-bold my-10'>Task Manager</h2>
            <TaskContext.Provider value={{todos, dispatch}}>
                {/* <button onClick={add}>addNew</button> */}
                <AddField />
                <FilterContextProvider>
                    <Filter />
                    <ul ref={ulRef}>
                        {todos.map((todo, idx) => (
                            <Item idx={idx} todo={todo} />
                        ))} 
                    </ul>
                </FilterContextProvider>
            </TaskContext.Provider>
            {/* <p>{todos.map(JSON.stringify)}</p> */}
        </div>
    )
}

export {TaskContext, TaskManager};