import {
  FormControl,
  Input,
  Center,
  Flex,
  Textarea,
  Button,
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

const RecipeForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const user = auth.currentUser;
  const recipeTypes = useSelector(
    (state: RootState) => state.recipe.recipeTypes
  );
  const recipeTime = useSelector((state: RootState) => state.recipe.recipeTime);

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

  return (
    <React.Fragment>
      <Navbar />
      <Center width="100%" height="95vh">
        <form onSubmit={onSubmitHandler}>
          <Flex justifyContent="center" alignItems="center" width="50vw">
            <FormControl textAlign="center">
              <Input
                onChange={(e) => onChangeHandler(e, setTitle)}
                placeholder="Name for your recipe"
              />
              <SelectComponent
                onChange={(e) => onChangeHandler(e, setType)}
                placeHolder="Choose type of your dish"
                values={recipeTypes}
              />
              <SelectComponent
                onChange={(e) => onChangeHandler(e, setTime)}
                placeHolder="Choose length of preparing"
                values={recipeTime}
              />
              <Textarea
                onChange={(e) => onChangeHandler(e, setDescription)}
                placeholder="Description"
                cols={20}
                rows={20}
                resize="none"
              />
              <Button type="submit">Submit</Button>
            </FormControl>
          </Flex>
        </form>
      </Center>
    </React.Fragment>
  );
};

export default RecipeForm;
