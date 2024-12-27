import { useState, createContext } from "react";

const FilterContext = createContext()

function FilterContextProvider({children}){
    
    const [state, setState] = useState({active: true, completed: true});

    const toggleActive = () => setState({...state, active: !state.active})
    const toggleCompleted = () => setState({...state, completed: !state.completed})

    return (
        <FilterContext.Provider value={{state, toggleActive, toggleCompleted}}>
            {children}
        </FilterContext.Provider>
    )
}

export { FilterContext, FilterContextProvider};