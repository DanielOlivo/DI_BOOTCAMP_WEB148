import RecipeItem from "./RecipeItem"

class RecipeCollection {

    private _list: RecipeItem[]

    constructor(lst: RecipeItem[] = []){
        this._list = lst;
        this.save()

        if(this._list.length === 0){
            console.log('how')
            this.loadItems()
        }

        console.log(this._list)
    }

    get list(){return this._list}

    add(newItem: RecipeItem): void {
        this._list.push(newItem)
        this.save()
    }

    remove(id: number): void{
        this._list = this._list.filter(i => i.id !== id)
        this.save()
    }

    toggleFavorite(id: number){
        const item = this._list.find(i => i.id === id)

        if(item){
            item.isFavorite = !item?.isFavorite
            this.save()
        }
    }

    save(): void {
        window.localStorage.setItem('items', JSON.stringify(this._list))
    }

    loadItems(): void {
        const saved = 
            window.localStorage.getItem('items')

        if(!saved)
            return

        const items: {_id: number, _title:string, _instructions:string, _ingredients: string[], _isFavorite: boolean}[] = JSON.parse(saved)

        this._list = items.map((i) =>
            new RecipeItem(i._id, i._title, i._ingredients, i._instructions, i._isFavorite))
    }

    clear(): void {
        this._list = []
        this.save()
    }
}

export default RecipeCollection