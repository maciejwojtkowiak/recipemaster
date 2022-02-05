import { Box } from "@chakra-ui/react"
import { Recipe } from "../../shared/types/Recipe"


const RecipeItem: React.FC<Recipe> = (props) => {
    return (
        <Box borderWidth="1px">
            <h1>{props.title}</h1>
        </Box>
    )
}

export default RecipeItem