import RecipeItem from "../model/RecipeItem";

export default class AddField{
    private _adderFn: (item: RecipeItem) => void
    private _titleField: HTMLInputElement
    private _ingredients: HTMLTextAreaElement
    private _instructions: HTMLTextAreaElement
    private _btn: HTMLButtonElement

    constructor(adderFn: (item: RecipeItem) => void){
        this._adderFn = adderFn
        this._titleField = document.getElementById('recipeTitle') as HTMLInputElement
        this._ingredients = document.getElementById('ingredients') as HTMLTextAreaElement
        this._instructions = document.getElementById('instructions') as HTMLTextAreaElement
        this._btn = document.getElementById('submit') as HTMLButtonElement
        this._btn.onclick = (e) => {
            e.preventDefault()
            this.add()
            this.reset()
        }
    }

    add(): void{
         const id = Number(Math.floor(Math.random() * 1000000))
         const title = this._titleField.value
         const instructions = this._instructions.value
         const ingredients = this._ingredients.value.split('\n')

         const item = new RecipeItem(id, title, ingredients, instructions, false)
         this._adderFn(item)
    }

    reset(): void{
        this._titleField.value = ''
        this._ingredients.value = ''
        this._instructions.value = ''
    }
}
