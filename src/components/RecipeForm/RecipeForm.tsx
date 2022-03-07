import { Input, Center, Flex, Textarea, Grid, Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { recipeAction } from "../../store/recipe-slice";
import { useDispatch } from "react-redux";
import { Recipe } from "../../shared/types/Recipe";
import { sendData } from "../../store/recipe-action";
import { auth } from "../../Firebase";
import { useSelector } from "react-redux";
import SelectComponent from "../UI/SelectComponent";
import { RootState } from "../../store/store";
import FormHeader from "./FormHeader";
import AddIngredients from "./Ingredients/IngredientBox";
import { ingredient } from "../../shared/types/Recipe";
import FormSubmitButton from "./FormSubmitButton";
import StepsBox from "./Steps/StepsBox";

const RecipeForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [ingredients, setIngredients] = useState<ingredient[]>([]);
  const [time, setTime] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [steps, setSteps] = useState<string[]>([]);
  const user = auth.currentUser;
  const recipeTypes = useSelector(
    (state: RootState) => state.recipe.recipeTypes
  );
  const recipeLengths = useSelector(
    (state: RootState) => state.recipe.recipeLengths
  );

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    if (user?.displayName) {
      const recipe: Recipe = {
        username: user.displayName,
        title: title,
        type: type,
        description: description,
        id: Math.random(),
        time: time,
        ingredients: ingredients,
        stars: Math.floor(Math.random() * 6) + 1,
      };
      dispatch(recipeAction.addRecipe(recipe));
      dispatch(sendData(recipe));
    }
  };

  const onChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    setValue: (value: string) => void
  ): void => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const onIngredientAdd = (ingredient: ingredient) => {
    setIngredients((previousIngredients) =>
      previousIngredients.concat(ingredient)
    );
  };

  const onStepAdd = (step: string) => {
    setSteps((previousSteps) => previousSteps.concat(step));
  };

  return (
    <React.Fragment>
      <Navbar />
      <Box width="100%">
        <Grid height="100%" placeItems="center" marginTop="3rem">
          <FormHeader />
        </Grid>
      </Box>

      <Center width="100%" minH="95vh" paddingTop="4rem" paddingBottom="2rem">
        <form onSubmit={onSubmitHandler}>
          <Flex justifyContent="center" alignItems="center" width="50vw">
            <Grid gap="1rem" width="100%">
              <Input
                onChange={(e) => onChangeHandler(e, setTitle)}
                placeholder="Name for your recipe"
              />
              <SelectComponent
                onChange={(e) => onChangeHandler(e, setType)}
                placeHolder="Choose type of your dish"
                values={recipeTypes}
              />
              <AddIngredients
                onIngredientAdd={onIngredientAdd}
                ingredients={ingredients}
              />
              <StepsBox />
              <SelectComponent
                onChange={(e) => onChangeHandler(e, setTime)}
                placeHolder="Choose length of preparing"
                values={recipeLengths}
              />
              <Textarea
                onChange={(e) => onChangeHandler(e, setDescription)}
                placeholder="Description"
                cols={20}
                rows={20}
                resize="none"
              />
              <FormSubmitButton />
            </Grid>
          </Flex>
        </form>
      </Center>
    </React.Fragment>
  );
};

export default RecipeForm;
