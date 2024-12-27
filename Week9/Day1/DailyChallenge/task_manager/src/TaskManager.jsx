import { useRef, useState, createContext, useReducer } from 'react';
import DblClickField from './Components/DblClickField';
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

function TaskManager(){
    const [todos, dispatch] = useReducer(taskReducer, []);
    const ulRef = useRef()

    const add = (e) => {
        e.preventDefault(); 
        dispatch({type:'create', payload: {value: '', check: false}})
    }

    return (
        <div>
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
            <p>{todos.map(JSON.stringify)}</p>
        </div>
    )
}

export {TaskContext, TaskManager};