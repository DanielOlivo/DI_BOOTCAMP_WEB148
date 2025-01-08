import { ItemProp, CategoryData } from "../types/declarations";

const CategoryItem = ({data}: ItemProp<CategoryData>) => {
    return (
        <div
            className="border border-pink-300 mt-5 p-6" 
        >
            <h3
                className="text-pink-600 text-4xl" 
            >{data.strCategory}</h3> 
            <div>
                <img src={data.strCategoryThumb} />
            </div>
            <p>{data.strCategoryDescription}</p>
        </div>
    )
}

export default CategoryItem