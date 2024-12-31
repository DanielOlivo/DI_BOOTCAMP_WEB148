import { useSelector, useDispatch } from "react-redux";
import Item from './Item'

export default function List(){

    const items = useSelector(state => state.todo)

    return (
        <div>
            {items.map(item => 
                <Item item={item} />
            )}
        </div>
    )
}