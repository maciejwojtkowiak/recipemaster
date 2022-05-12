import { Recipe } from "../../../shared/types/Recipe";
import { Box } from "@chakra-ui/react";
import ColumnHeader from "./ColumnHeader";
import DetailListItem from "./DetailListItem";
import React from "react";

interface funcProps {
  recipe: Recipe;
}

const RecipeIngredientsBox: React.FC<funcProps> = (props) => {
  const ingredients = props.recipe.ingredients;
  return (
    <React.Fragment>
      <ColumnHeader title="Ingredients" />
      {ingredients.map((ingredient, i) => (
        <DetailListItem
          key={i}
          isIngredient={true}
          itemName={ingredient.name!}
          indexOfItem={i}
          amount={ingredient.amount!}
          unit={ingredient.unit!}
        ></DetailListItem>
      ))}
    </React.Fragment>
  );
};

export default RecipeIngredientsBox;
