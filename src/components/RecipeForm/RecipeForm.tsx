import {
  FormControl,
  Input,
  Center,
  Flex,
  Textarea,
  Button,
  Grid,
} from "@chakra-ui/react";
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
import AddIngredients from "./AddIngredients";

const RecipeForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [time, setTime] = useState<string>("");
  const [description, setDescription] = useState<string>("");
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
        ingredients: [],
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

  const ingredientIsAdded = (ingredient: string) => {
    setIngredients((previousIngredients) =>
      previousIngredients.concat(ingredient)
    );
  };

  return (
    <React.Fragment>
      <Navbar />
      <Center width="100%" height="95vh">
        <form onSubmit={onSubmitHandler}>
          <Flex justifyContent="center" alignItems="center" width="50vw">
            <FormControl textAlign="center">
              <Grid gap="1rem">
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
                  ingredientIsAdded={ingredientIsAdded}
                  ingredients={ingredients}
                />
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
                <Button
                  width="30%"
                  bgGradient="linear(to-r, orange.300, orange.400)"
                  color="white"
                  justifySelf="center"
                  type="submit"
                  _hover={{
                    bgGradient: "linear(to-r, orange.200, orange.400)",
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </FormControl>
          </Flex>
        </form>
      </Center>
    </React.Fragment>
  );
};

export default RecipeForm;
