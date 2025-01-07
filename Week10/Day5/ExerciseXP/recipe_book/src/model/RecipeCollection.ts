import RecipeItem from "./RecipeItem";
import { IRecipes, RecipeAdder, RecipeFavToggler } from "../typeDeclarations";

class RecipeCollection implements RecipeAdder, RecipeFavToggler, IRecipes {

    public recipes: RecipeItem[] = []

    public triggerFn: () => void = () => {};

    public add(recipe: RecipeItem){
        recipe.removeFn = () => this.remove(recipe.id)
        this.recipes.push(recipe)
    }

    public remove(recipeId: number){
        this.recipes = this.recipes.filter(({id}) => id !== recipeId)
        this.triggerFn()
    }

    public removeAll(): void{
        this.recipes = []
        // this.triggerFn()
    }

    public toggleFavorite(recipeId: number){
        const recipe = this.recipes.find(({id}) => id === recipeId)

        if(recipe){
            recipe.isFavorite = !recipe?.isFavorite
        }
    }

    public saveToLocalStorage(recipeId: number){
        const recipe = this.recipes.find(({id}) => id === recipeId)
        if(recipe){
            window.localStorage.setItem(String(recipe.id), recipe.toString())
        }
    }

    public loadFromLocalStorage(recipeId: number): RecipeItem | undefined{
        const recipe = window.localStorage.getItem(String(recipeId))
        if(recipe){
            return new RecipeItem(JSON.parse(recipe), () => this.remove(recipeId))
        }
        throw new Error('recipe not found')
    }
    
}

// type RecipeCollection

export default RecipeCollection;