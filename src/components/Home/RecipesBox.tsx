import RecipesList from "./RecipesList"
import { Box } from "@chakra-ui/react"

const RecipesBox = () => {
    return (
        <Box minH="100vh" w="100%" >
            <RecipesList />
        </Box>
    )
}

export default RecipesBox