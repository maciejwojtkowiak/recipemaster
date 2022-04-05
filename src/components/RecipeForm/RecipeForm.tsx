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
  ingredientValidation,
} from "../../shared/types/AddRecipeForm";
import { uiAction } from "../../store/ui-slice";

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
};

const RecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [type, setType] = useState<string>("");
  const [ingredients, setIngredients] = useState<ingredient[]>([]);
  const [time, setTime] = useState<string>("");
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const [steps, setSteps] = useState<Step[]>([]);
  const inputReducer = (
    state: inputsFormState,
    action: inputsFormAction
  ): inputsFormState => {
    let isValid = false;
    let isClicked = true;
    let isWrong = false;
    const { content } = action;

    if (action.type === ActionKind.stringVal) {
      isClicked = true;
      isValid = content.length > 0;
      isWrong = isClicked && !isValid;
      if (action.field === "step") {
        let stepsAreValid = steps.length > 0 || content.length > 0;
        return {
          ...state,
          step: {
            val: content,
            isValid: stepsAreValid,
            isClicked: true,
            isWrong: isClicked && !stepsAreValid,
          },
        };
      }
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

    return {
      ...state,
    };
  };
  const [stringInputsValues, dispatchReducer] = useReducer(
    inputReducer,
    initialStateReducer
  );

  const [ingredientValidation, setIngredientValidation] =
    useState<ingredientValidation>({
      isValid: false,
      isClicked: false,
      isWrong: false,
      values: {
        name: "",
        amount: "",
        unit: "",
      },
    });

  const user = auth.currentUser;
  const recipeTypes = useSelector(
    (state: RootState) => state.constantValues.recipeTypes
  );
  const recipeLengths = useSelector(
    (state: RootState) => state.constantValues.recipeLengths
  );

  let arrOfValid: boolean[] = [];
  let arrOfInvalidFields: string[] = [];

  const everythingIsValid = () => {
    for (const key of Object.keys(stringInputsValues)) {
      arrOfValid.push(
        stringInputsValues[key as keyof typeof stringInputsValues].isValid
      );
      if (!stringInputsValues[key as keyof typeof stringInputsValues].isValid) {
        arrOfInvalidFields.push(` ${key} `);
      }
    }
    arrOfValid.push(ingredients.length > 0);

    ingredients.length === 0 && arrOfInvalidFields.push(" ingredients ");

    return arrOfValid.every((inputIsTrue) => inputIsTrue);
  };

  let isFormValid = everythingIsValid();

  useEffect(() => {
    setFormIsValid(isFormValid);
  }, [isFormValid]);

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!formIsValid) {
      dispatch(
        uiAction.setNotification({
          message: `Fields and lists  [${[
            ...arrOfInvalidFields,
          ]}] can not be empty`,
          type: "error",
          isShown: true,
        })
      );
    }

    if (formIsValid && user?.displayName) {
      const recipe: Recipe = {
        username: user.displayName,
        title: stringInputsValues.description.val,
        type: type,
        description: stringInputsValues.title.val,
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

  const changeTextHandler = (field: string, content: string) => {
    dispatchReducer({
      type: ActionKind.stringVal,
      field: field,
      content: content,
    });
  };

  const changeInputValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    changeTextHandler(e.target.name, e.target.value);
  };

  const onIngredientAdd = (ingredient: ingredient) => {
    setIngredients((previousIngredients) =>
      previousIngredients.concat(ingredient)
    );
  };

  const onStepAdd = (step: Step) => {
    setSteps((previousSteps) => previousSteps.concat(step));
  };

  const validateIngredients = (
    ingredientValidationValues: ingredientValidation
  ) => {
    setIngredientValidation(ingredientValidationValues);
    console.log(ingredientValidation);
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
                onChange={(e) => changeInputValue(e)}
                placeholder={`${
                  stringInputsValues.title.isWrong
                    ? "This field can not be an empty"
                    : "Title"
                }`}
                bgColor={`${stringInputsValues.title.isWrong && "#FED7D7"}`}
              />
              <SelectComponent
                onChange={(e) => onSelectChangeHandler(e, setType)}
                placeHolder="Choose type of your dish"
                values={recipeTypes}
              />
              <IngredientsContainer
                getIngredientValues={validateIngredients}
                isWrong={ingredientValidation.isWrong}
                ingredients={ingredients}
                onIngredientAdd={onIngredientAdd}
              />
              <StepsContainer
                stepName={stringInputsValues.step.val}
                onStepAdd={onStepAdd}
                onStepNameChange={changeTextHandler}
                setSteps={setSteps}
                stepIsWrong={stringInputsValues.step.isWrong}
                steps={steps}
              />
              <SelectComponent
                onChange={(e) => onSelectChangeHandler(e, setTime)}
                placeHolder="Choose length of preparing"
                values={recipeLengths}
              />
              <Textarea
                name="description"
                onChange={(e) => changeInputValue(e)}
                placeholder={`${
                  stringInputsValues.title.isWrong
                    ? "This field can not be an empty"
                    : "Description"
                }`}
                bgColor={`${
                  stringInputsValues.description.isWrong && "#FED7D7"
                }`}
                cols={20}
                rows={20}
                resize="none"
              />
              <FormSubmitButton formIsValid={formIsValid} />
            </Grid>
          </Flex>
        </form>
      </Center>
    </React.Fragment>
  );
};

export default RecipeForm;
