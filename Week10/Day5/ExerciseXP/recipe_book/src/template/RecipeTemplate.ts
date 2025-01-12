import RecipeCollection from "../model/RecipeCollection"

export interface DOMList {
    div: HTMLDivElement
    clear(): void
    render(recipes: RecipeCollection): void
}

export default class RecipeTemplate implements DOMList {
    div: HTMLDivElement

    constructor(){
        this.div = document.getElementById("items") as HTMLDivElement
    }

    clear(): void {
        this.div.innerHTML = ""
    }

    render(recipes: RecipeCollection): void {
        this.clear()

        recipes.list.forEach((recipe) => {
            const itemDiv = document.createElement('div')

            const title = document.createElement('h3') as HTMLHeadingElement
            title.textContent = recipe.title
            itemDiv.appendChild(title)

            const favDiv = document.createElement("div") as HTMLDivElement
            const isFav = document.createElement('input') as HTMLInputElement; 
            isFav.type = 'checkbox'
            isFav.checked = recipe.isFavorite;
            isFav.onchange = (e) => {
                e.preventDefault()
                recipes.toggleFavorite(recipe.id) 
            }
            const label = document.createElement('label') as HTMLLabelElement
            label.textContent = 'favorite'
            favDiv.appendChild(isFav)
            favDiv.appendChild(label)
            itemDiv.appendChild(favDiv)

            const ingList = document.createElement('ul') as HTMLUListElement;
            for(const ing of recipe.ingredients){
                const li = document.createElement('li')  as HTMLLIElement;
                li.textContent = ing
                ingList.appendChild(li)
            }
            itemDiv.appendChild(ingList)

            const instructions = document.createElement('p') as HTMLParagraphElement
            instructions.textContent = recipe.instructions
            itemDiv.appendChild(instructions)

            const removeBtn = document.createElement('button') as HTMLButtonElement 
            removeBtn.textContent = 'Remove'
            removeBtn.onclick = ((e: MouseEvent) => {
                recipes.remove(recipe.id)
                this.render(recipes)
            })
            itemDiv.appendChild(removeBtn)

            this.div.appendChild(itemDiv)
        })
    }
}