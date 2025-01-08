import { ItemProp, Meal } from "../types/declarations"

const MealItem = ({data}: ItemProp<Meal>) => {

    const getImg = () => !data.thumb ? <></> : (
        <div
            className="w-full flex flex-row justify-center" 
        >
            <img 
                className="object-cover w-2/3"
                src={data.thumb} />
        </div>
    )

    return (
        <div 
            key={data.id}
            className="
                flex flex-col items-start
                border border-pink-300 rounded px-3 py-3 mt-7
            "
        >
            <h2
                className="text-4xl text-pink-600" 
            >{data.name}</h2>
            <p
                className="text-gray-400" 
            >{data.category}</p>

            {getImg()}

            <details open={true}
                className="w-full" 
            >
                <summary
                    className="text-pink-500" 
                >Ingredients</summary>
                <ul
                    className="list-disc mx-8" 
                >
                    {data.ingredients.filter(({name}) => name && name.length > 0).map(({name, measure}) => 
                            <li
                                className="w-full" 
                            >
                                <span
                                    className="w-48" 
                                >{name}</span>: <span
                                    className="text-pink-700" 
                                >{measure}</span></li>
                    )}
                </ul>
            </details>

            <details 
                open={true}>
                <summary
                    className="text-pink-500"
                >Instructions</summary>
                <p>{data.instructions}</p>
            </details>
        </div> 
    )
}

export default MealItem;

