import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { Box } from "@chakra-ui/react"


const RecipesList = () => {
    const recipes = useSelector((state: RootState) => state.recipe.recipes)
    return (
        <Box >
            {recipes.map(recipe => <div>{recipe.title}</div>)}
        </Box>

    )
}

export default RecipesList