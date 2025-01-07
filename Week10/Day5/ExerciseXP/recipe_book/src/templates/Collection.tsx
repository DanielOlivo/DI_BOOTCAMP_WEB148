import { ReactNode, useState, useEffect } from "react";
import RecipeTemplate from "./RecipeTemplate";
import { CollectionProp, IRecipes } from "../typeDeclarations";

const Collection = (
    // {collection}: CollectionProp
    {recipes}: IRecipes
): ReactNode => {


    // useEffect(() => {

    // }, [recipes])

    return (
        <div
            className="
                flex flex-col justify-start items-center mt-4 w-full
            " 
        >
            {recipes.map(recipe => 
                <RecipeTemplate item={recipe}  />
            )}
        </div>
    )
}

export default Collection;