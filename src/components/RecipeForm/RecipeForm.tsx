import { Input, Center, Flex, Textarea, Grid, Box } from "@chakra-ui/react";
import React from "react";
import { useState, useReducer, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { recipeAction } from "../../store/recipe-slice";
import { useDispatch } from "react-redux";
import { Recipe, Step } from "../../shared/types/Recipe";
import { sendData } from "../../store/recipe-action";
import { auth } from "../../Firebase";
import { useSelector } from "react-redux";
import SelectComponent from "../UI/SelectComponent";
import { RootState } from "../../store/store";
import FormHeader from "./FormHeader";
import { ingredient } from "../../shared/types/Recipe";
import FormSubmitButton from "./FormSubmitButton";
import StepsContainer from "./Steps/StepsContainer";
import { useNavigate } from "react-router-dom";
import IngredientsContainer from "./Ingredients/IngredientsContainer";
import {
  inputsFormAction,
  inputsFormState,
  ActionKind,
} from "../../shared/types/AddRecipeForm";

const initialStateReducer: inputsFormState = {
  title: {
    val: "",
    isValid: false,
  },
  description: {
    val: "",
    isValid: false,
  },
};

const RecipeForm = () => {
  const inputReducer = (
    state: inputsFormState,
    action: inputsFormAction
  ): inputsFormState => {
    console.log(action.type, action.content, action.field);
    let isValid: boolean;
    const { content } = action;
    isValid = content.length > 0;
    return {
      [action.field]: {
        val: content,
        isValid: isValid,
      },
      ...state,
    };
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [type, setType] = useState<string>("");
  const [ingredients, setIngredients] = useState<ingredient[]>([]);
  const [time, setTime] = useState<string>("");
  const [steps, setSteps] = useState<Step[]>([]);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const [inputsValues, dispatchReducer] = useReducer(
    inputReducer,
    initialStateReducer
  );

  console.log(inputsValues.description);

  const user = auth.currentUser;
  const recipeTypes = useSelector(
    (state: RootState) => state.constantValues.recipeTypes
  );
  const recipeLengths = useSelector(
    (state: RootState) => state.constantValues.recipeLengths
  );

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    if (user?.displayName) {
      console.log(inputsValues.description.val);
      const recipe: Recipe = {
        username: user.displayName,
        title: inputsValues.description.val,
        type: type,
        description: inputsValues.title.val,
        id: Math.random(),
        time: time,
        ingredients: ingredients,
        stars: Math.floor(Math.random() * 6) + 1,
        steps: steps,
        comments: [],
      };
      dispatch(recipeAction.addRecipe(recipe));
      dispatch(sendData(recipe));
      navigate("/");
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

  const changeTextHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatchReducer({
      type: ActionKind.changeVal,
      field: e.target.name,
      content: e.target.value,
    });
  };

  const onIngredientAdd = (ingredient: ingredient) => {
    setIngredients((previousIngredients) =>
      previousIngredients.concat(ingredient)
    );
  };

  const onStepAdd = (step: Step) => {
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
                name="title"
                onChange={(e) => changeTextHandler(e)}
                placeholder="Name for your recipe"
              />
              <SelectComponent
                onChange={(e) => onChangeHandler(e, setType)}
                placeHolder="Choose type of your dish"
                values={recipeTypes}
              />
              <IngredientsContainer
                ingredients={ingredients}
                onIngredientAdd={onIngredientAdd}
              />
              <StepsContainer
                onStepAdd={onStepAdd}
                steps={steps}
                setSteps={setSteps}
              />
              <SelectComponent
                onChange={(e) => onChangeHandler(e, setTime)}
                placeHolder="Choose length of preparing"
                values={recipeLengths}
              />
              <Textarea
                name="description"
                onChange={(e) => changeTextHandler(e)}
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
