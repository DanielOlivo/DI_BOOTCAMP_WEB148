import RecipeCollection from './model/RecipeCollection'
import RecipeItem from './model/RecipeItem'

export type Recipe = {
    id: number
    title: string
    ingredients: string[]
    instructions: string
    isFavorite: boolean
}

export interface CollectionProp {
    collection: RecipeCollection
}

export type AddFieldProp = {
    adder: RecipeAdder
}

export type ItemProp = {
    item: RecipeItem
}

export interface RecipeAdder {
    add: (recipe: RecipeItem) => void
}

export interface IRecipes {
    recipes: RecipeItem[]
}

export interface RecipeFavToggler {
    toggleFavorite: (id: number) => void
}