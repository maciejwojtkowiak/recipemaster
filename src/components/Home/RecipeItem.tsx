import { Box, Heading, Image, Text, Button, Icon } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Recipe } from "../../shared/types/Recipe"
import Breakfast from "../../images/Breakfast.jpg"
import {FaHeart} from "react-icons/fa"
import { useState } from "react"




const RecipeItem: React.FC<Recipe> = (props) => {
    const [isLiked, setIsLiekd] = useState<boolean>(false)
    const onClickHandler = () => {
        setIsLiekd(true)
    }
    return (
        <Box height="40vh" width="40vh" borderWidth="1px" marginTop="2rem">
            <Box position="relative">
            <Icon onClick={onClickHandler} as={FaHeart} w={8} h={8} color={`${isLiked ? 'red.500' : 'white'}`} position="absolute" right="2%" top="4%" />
            <Image height="20vh" width="100%" src={Breakfast}></Image>
            </Box>
            <Box  marginLeft="1rem" marginTop="1rem">
                <Heading  font-weight="3rem">{props.title}<Text marginLeft="0.5rem" fontWeight="normal" fontSize="1rem" as="span">{props.type}</Text></Heading>
                <Text fontSize="1.1rem"><Text fontSize="0.8rem" as="span">Author: </Text>{props.username}</Text>
                <Text fontSize="1.1rem"><Text fontSize="0.8rem" as="span">Time: </Text>{props.time}</Text>
            </Box>
            <Box textAlign="right" marginRight="2rem"><Button bgGradient='linear(to-r, orange.200, orange.300)'><Link to={`/${props.id}`}>Go</Link></Button></Box>
        </Box>
    )
}

export default RecipeItem