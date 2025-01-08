import { ApiResponse, Meal, transform} from "../types/declarations";

async function fetchSearchByName(name: string): Promise<Meal[]>{
    const url = "www.themealdb.com/api/json/v1/1/search.php?s=".concat(name)
    const options = {
        method: 'GET',
    }

    const response = await fetch(url, options)
    const json: ApiResponse[] = await response.json()

    return json.map(transform)
}

export {fetchSearchByName};