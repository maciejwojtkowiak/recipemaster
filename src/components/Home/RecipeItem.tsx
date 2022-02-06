import { Box } from "@chakra-ui/react"
import { Recipe } from "../../shared/types/Recipe"


const RecipeItem: React.FC<Recipe> = (props) => {
    return (
        <Box height="35vh" width="40vh" borderWidth="1px">
            <h1>{props.title}</h1>
            <p>{props.username}</p>
            <p>{props.description}</p>
            <p>{props.type}</p>
        </Box>
    )
}

export default RecipeItem