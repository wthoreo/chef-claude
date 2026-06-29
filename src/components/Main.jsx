import React, { useEffect } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import {getRecipeFromMistral} from "../ai"

export default function Main(){
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)
    console.log(recipeSection)

    React.useEffect(() => {
        if (recipe && recipeSection.current){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])
 
    async function getRecipe(){
        const recipeMarkDown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkDown)
    }
    
    function addIngredient(formData){
        const newItem = formData.get("ingredient")
        setIngredients((prevIngredients) => [...prevIngredients, newItem])
    }

    return(
        <main>
            <form action= {addIngredient} className="add-ingredient-form">
                <input
                    type= "text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient" 
                    name= "ingredient"
                />
                <button>+ Add ingredient</button>
            </form>

            <IngredientsList ref= {recipeSection} ingredients= {ingredients} getRecipe= {getRecipe}/>
            {recipe && <ClaudeRecipe recipe= {recipe}/>}
        </main>
    )
}