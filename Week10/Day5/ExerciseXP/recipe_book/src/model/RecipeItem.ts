import { Recipe } from "../typeDeclarations"

class RecipeItem {

    readonly id: number
    public title: string 
    public ingredients: string[]
    public instructions: string 
    public isFavorite: boolean

    public removeFn: () => void

    constructor({id, title, ingredients, instructions, isFavorite = false}: Recipe, removeFn: () => void){
        this.id = id
        this.title = title
        this.ingredients = ingredients
        this.instructions = instructions
        this.isFavorite = isFavorite

        this.removeFn = removeFn
    }

    public toString(): string{
        const obj = {
            id: this.id, 
            title: this.title, 
            ingredients: this.ingredients, 
            instructions: this.instructions, 
            isFavorite: this.isFavorite
        }
        return JSON.stringify(obj)
    }
}


export default RecipeItem;