import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { Flex, Grid } from "@chakra-ui/react"
import RecipeItem from "./RecipeItem"


const RecipesList = () => {
    const initialRecipes = useSelector((state: RootState) => state.recipe.recipes )
    const filteredRecipes = useSelector((state: RootState) => state.recipe.filteredRecipes)
    let recipes = filteredRecipes.length > 0 ? filteredRecipes : initialRecipes


    return (
        <Flex height="100%" justifyContent="center" alignItems="center" margin="2rem">
             <Grid minH="80%" maxH="auto" width="90%" placeItems="center" templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)" >
                {recipes.map(recipe => <RecipeItem key={recipe.id} username={recipe.username} id={recipe.id} title={recipe.title} type={recipe.type} description={recipe.description} time={recipe.time} /> )}
            </Grid>
        </Flex>
           
       

    )
}

export default RecipesList