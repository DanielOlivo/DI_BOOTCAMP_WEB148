import CategoryItem from "../components/Category"

export type ApiResponse = {
    idMeal: string
    strMeal: string 
    strCategory?: string 
    strArea?: string 
    strInstructions: string
    strMealThumb?: string
    strTags?: string 

    // no jokes
    strIngredient1?: string
    strIngredient2?: string
    strIngredient3?: string
    strIngredient4?: string
    strIngredient5?: string
    strIngredient6?: string
    strIngredient7?: string
    strIngredient8?: string
    strIngredient9?: string
    strIngredient10?: string
    strIngredient11?: string
    strIngredient12?: string
    strIngredient13?: string
    strIngredient14?: string
    strIngredient15?: string
    strIngredient16?: string
    strIngredient17?: string
    strIngredient18?: string
    strIngredient19?: string
    strIngredient20?: string

    strMeasure1?: string
    strMeasure2?: string
    strMeasure3?: string
    strMeasure4?: string
    strMeasure5?: string
    strMeasure6?: string
    strMeasure7?: string
    strMeasure8?: string
    strMeasure9?: string
    strMeasure10?: string
    strMeasure11?: string
    strMeasure12?: string
    strMeasure13?: string
    strMeasure14?: string
    strMeasure15?: string
    strMeasure16?: string
    strMeasure17?: string
    strMeasure18?: string
    strMeasure19?: string
    strMeasure20?: string
}

export type Ingredient = {
    name: string 
    measure: string
}

export type Meal = {
    id: string 
    name: string 
    category?: string 
    area?: string
    instructions: string 
    thumb?: string
    tags?: string[]
    ingredients: Ingredient[]
}

export function isMeal(meal: any): meal is Meal {
    if(typeof meal !== 'object')
        return false 
    return ['id', 'name', 'category', 'instructions']
        .every(prop => prop in meal)
}

export type ItemProp<T> = {
    data: T
}

export type CategoryData = {
    idCategory: string 
    strCategory: string
    strCategoryThumb: string 
    strCategoryDescription: string
}

export function isCategoryData(data: any): data is CategoryData {
    return 'idCategory' in data
}

export function transform(res: ApiResponse): Meal {

    const ingredients: Ingredient[] = []

    for(let i = 1; i < 21; i++){
        const ingName = 'strIngredient' + String(i)
        const measure = 'strMeasure' + String(i)        

        if(ingName in res && measure in res){
            ingredients.push({name: res[ingName as keyof ApiResponse]!, measure: res[measure as keyof ApiResponse]!})
        }
    }

    return {
        id: res.idMeal,
        name: res.strMeal,
        category: res.strCategory,
        area: res.strArea,
        instructions: res.strInstructions,
        thumb: res.strMealThumb,
        tags: res.strTags?.split(','),
        ingredients
    }
}