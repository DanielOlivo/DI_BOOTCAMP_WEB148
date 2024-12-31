import { useSelector, useDispatch } from "react-redux";
import Item from './Item'

export default function List(){

    const items = useSelector(state => state.todo)
    const {activeOn, completedOn, date, titleFilter} = useSelector(state => state.filter)

    return (
        <div>
            {items.filter(item => 
                ((item.active && activeOn) || (!item.active && completedOn))
                && ((titleFilter.length == 0) || (item.title.includes(titleFilter)))
                && ((date.length == 0) || (item.date == date))
            ).map(item => 
                <Item item={item} />
            )}
        </div>
    )
}