import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Recipe } from "../../shared/types/Recipe"


const RecipeItem: React.FC<Recipe> = (props) => {
    return (
        <Box height="35vh" width="40vh" borderWidth="1px">
            <Image height="20vh"></Image>
            <Heading>{props.title}</Heading>
            <Text>{props.username}</Text>
            <Text>{props.description}</Text>
            <Text>{props.type}</Text>
            <Link to={`/${props.id}`}>Go</Link>
        </Box>
    )
}

export default RecipeItem