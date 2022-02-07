import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

const RecipeDetail = () => {
    const recipes = useSelector((state: RootState) => state.recipe.recipes)
    const params = useParams()
    const paramsId = params.recipeid
    const detailedRecipe = recipes.find(recipe => recipe.id.toString() === paramsId)
    
    return (
        <div>
            heloł
        </div>
    )
}

export default RecipeDetail