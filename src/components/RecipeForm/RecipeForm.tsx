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
    isClicked: false,
    isWrong: false,
  },
  description: {
    val: "",
    isValid: false,
    isClicked: false,
    isWrong: false,
  },
  step: {
    val: "",
    isValid: false,
    isClicked: false,
    isWrong: false,
  },
  ingredient: {
    val: { name: "", amount: "", unit: "" },
    isValid: false,
    isClicked: false,
    isWrong: false,
  },
};

const RecipeForm = () => {
  const inputReducer = (
    state: inputsFormState,
    action: inputsFormAction
  ): inputsFormState => {
    let isValid = false;
    let isClicked = true;
    let isWrong = false;
    const { content } = action;
    const validateInput = (content: string) => {
      isClicked = true;
      isValid = content.length > 0;
      isWrong = isClicked && !isValid;
    };

    if (
      action.type === ActionKind.stringVal &&
      action.field &&
      typeof content === "string"
    ) {
      validateInput(content);
      return {
        ...state,
        [action.field]: {
          val: content,
          isValid: isValid,
          isClicked: isClicked,
          isWrong: isWrong,
        },
      };
    }

    function isIngredient(object: any): object is ingredient {
      return "unit" in object;
    }

    if (action.type === ActionKind.ingredientVal && isIngredient(content)) {
      if (content.name) {
        validateInput(content.name);
      }
      return {
        ...state,
        ingredient: {
          val: {
            name: content.name,
            amount: content.amount,
            unit: content.unit,
          },
          isClicked: isClicked,
          isValid: isValid,
          isWrong: isWrong,
        },
      };
    }

    return {
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

  const onSelectChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setValue: (value: string) => void
  ): void => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const changeTextHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatchReducer({
      type: ActionKind.stringVal,
      field: e.target.name,
      content: e.target.value,
    });
  };

  const getIngredient = (ingredient: ingredient) => {
    dispatchReducer({
      type: ActionKind.ingredientVal,
      content: ingredient,
      field: null,
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

  console.log(inputsValues);

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
                placeholder={`${
                  inputsValues.title.isWrong
                    ? "This field can not be an empty"
                    : "Title"
                }`}
                bgColor={`${inputsValues.title.isWrong && "#FED7D7"}`}
              />
              <SelectComponent
                onChange={(e) => onSelectChangeHandler(e, setType)}
                placeHolder="Choose type of your dish"
                values={recipeTypes}
              />
              <IngredientsContainer
                getIngredientValues={getIngredient}
                ingredients={ingredients}
                onIngredientAdd={onIngredientAdd}
              />
              <StepsContainer
                stepName={inputsValues.step.val}
                onStepAdd={onStepAdd}
                onStepNameChange={(e) => changeTextHandler(e)}
                setSteps={setSteps}
                stepIsWrong={inputsValues.step.isWrong}
                steps={steps}
              />
              <SelectComponent
                onChange={(e) => onSelectChangeHandler(e, setTime)}
                placeHolder="Choose length of preparing"
                values={recipeLengths}
              />
              <Textarea
                name="description"
                onChange={(e) => changeTextHandler(e)}
                placeholder={`${
                  inputsValues.title.isWrong
                    ? "This field can not be an empty"
                    : "Description"
                }`}
                bgColor={`${inputsValues.description.isWrong && "#FED7D7"}`}
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
