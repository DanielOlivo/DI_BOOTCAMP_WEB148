import { useState, useContext } from "react";
import {FilterContext} from '../FilterContext'

export default function Filter(){

    const filter = useContext(FilterContext)

    return (
        <div className='filter'>
            <p>{JSON.stringify(filter)}</p>
            <div>
                <input 
                    type='checkbox' 
                    onChange={filter.toggleActive} 
                    checked={filter.state.active}
                />
                <label>Active</label>
            </div>

            <div>
                <input 
                    type='checkbox' 
                    onChange={filter.toggleCompleted} 
                    checked={filter.state.completed}
                />
                <label>Completed</label>
            </div>
        </div>
    )
}