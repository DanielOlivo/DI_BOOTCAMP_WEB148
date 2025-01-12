class RecipeItem {

    constructor(
        private _id: number,
        private _title: string,
        private _ingredients: string[],
        private _instructions: string,
        private _isFavorite: boolean
    ){}

    get id(){return this._id}

    get title(){return this._title};
    set title(value: string) {this._title = value}

    get ingredients(){return this._ingredients}
    set ingredients(value: string[]){this._ingredients = value}

    get instructions(){return this._instructions}
    set instructions(value: string){this._instructions = value}

    get isFavorite(){return this._isFavorite}
    set isFavorite(value: boolean){this._isFavorite = value}
}

export default RecipeItem