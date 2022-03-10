import { ingredient } from "../../../shared/types/Recipe";
import IngredientItem from "./IngredientItem";
import { Heading } from "@chakra-ui/react";
import ListContainerBox from "../UI/ListContainerBox";

interface funcProps {
  ingredients: ingredient[];
}

const IngredientBox: React.FC<funcProps> = (props) => {
  const isThereNoIngredients = props.ingredients?.length === 0;

  return (
    <ListContainerBox>
      <Heading>Ingredients</Heading>
      {isThereNoIngredients && <h1>No ingredients was added yet</h1>}
      {!isThereNoIngredients &&
        props.ingredients!.map((item, index) => (
          <IngredientItem
            key={index}
            itemName={item.name!}
            numberOfIngredient={index + 1}
          />
        ))}
    </ListContainerBox>
  );
};

export default IngredientBox;
