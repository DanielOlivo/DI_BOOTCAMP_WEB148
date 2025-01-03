import { useSelector } from "react-redux"
import { selectAllCategories } from "./categorySlice"
import { forwardRef } from "react"

const ItemCategorySelector = forwardRef((props, ref) => {
    const cats = useSelector(selectAllCategories)
    const categories = Object.entries(cats)

    const val = props.value !== undefined ? props.value : categories[0][0]

    return (
        <select 
            defaultValue={val}
            style={{color: cats.val}}
            // ref={props.ref !== undefined ? props.ref : undefined}
            ref={ref}
            onChange={(e) => console.log(e.target.value)}
        >
            {categories.map(([cat, color]) => 
                <option 
                    value={cat}
                    style={{color: color}}
                >{cat}</option>)}    
        </select>
    )
})

export default ItemCategorySelector;