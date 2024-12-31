import { useDispatch, useSelector } from "react-redux"
import { toggleActive, toggleCompleted, updDate, updTitle } from "./filterSlice"

export default function Filter(){

    const dispatch = useDispatch()
    const {activeOn, completedOn, date, titleFilter} = useSelector(state => state.filter)

    return (
        <div
            className="flex flex-row justify-between items-center mb-6 mt-3" 
        >
            <div
                className="flex flex-col mr-3" 
            >
                <div
                    className="flex flex-row" 
                >
                    <input 
                        type='checkbox'
                        checked={activeOn}
                        onChange={(e) => dispatch(toggleActive())}
                    />
                    <label>active</label>
                </div>
                <div
                    className="flex flex-row" 
                >
                    <input 
                        type='checkbox'
                        checked={completedOn}
                        onChange={(e) => dispatch(toggleCompleted())}
                    />
                    <label>completed</label>
                </div>
            </div>

            <input 
                placeholder="search by title"
                value={titleFilter}
                onChange={(e) => dispatch(updTitle(e.target.value))}
            />

            <input 
                type='date'
                value={date}
                onChange={(e) => dispatch(updDate(e.target.value))}
            />
        </div>
    )
}