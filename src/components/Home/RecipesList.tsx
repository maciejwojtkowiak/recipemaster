import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { Flex, Grid } from "@chakra-ui/react"
import RecipeItem from "./RecipeItem"


const RecipesList = () => {
    // const recipes = useSelector((state: RootState) => state.recipe.recipes)


    const recipes = [
        {
            id: Math.random(),
            title: 'recipes',
            type: 'type',
            description: 'desc',
        },

        {
            id: Math.random(),
            title: 'recip',
            type: 'typ',
            description: 'des',
        }
    ]
    return (
        <Flex height="100%" width="100%" borderWidth="1px"  justifyContent="center" alignItems="center">
             <Grid height="80%" width="90%" placeItems="center" borderWidth="1px" >
                {recipes.map(recipe => <RecipeItem key={recipe.id} id={recipe.id} title={recipe.title} type={recipe.type} description={recipe.description} /> )}
            </Grid>
        </Flex>
           
       

    )
}

export default RecipesList