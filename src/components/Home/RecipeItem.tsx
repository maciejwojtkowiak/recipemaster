import { Box, Heading, Image, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Recipe } from "../../shared/types/Recipe"


const RecipeItem: React.FC<Recipe> = (props) => {
    return (
        <Box height="40vh" width="40vh" borderWidth="1px" marginTop="2rem">
            <Image height="20vh"></Image>
            <Heading>{props.title}</Heading>
            <Text>{props.username}</Text>
            <Text>{props.description}</Text>
            <Text>{props.type}</Text>
            <Button bgGradient='linear(to-r, orange.200, orange.300)'><Link to={`/${props.id}`}>Go</Link></Button>
        </Box>
    )
}

export default RecipeItem