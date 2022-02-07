import { Box, Heading, Image, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Recipe } from "../../shared/types/Recipe"
import Breakfast from "../../images/Breakfast.jpg"



const RecipeItem: React.FC<Recipe> = (props) => {
    return (
        <Box height="40vh" width="40vh" borderWidth="1px" marginTop="2rem">
            <Image height="20vh" width="100%" src={Breakfast}></Image>
            <Heading>{props.title}</Heading>
            <Text>{props.username}</Text>
            <Text>{props.description}</Text>
            <Text>{props.type}</Text>
            <Box textAlign="right" marginRight="2rem"><Button bgGradient='linear(to-r, orange.200, orange.300)'><Link to={`/${props.id}`}>Go</Link></Button></Box>
        </Box>
    )
}

export default RecipeItem