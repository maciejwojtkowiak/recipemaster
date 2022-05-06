import { ingredient } from "../../../shared/types/Recipe";
import IngredientItem from "./IngredientItem";
import ListContainerBox from "../UI/ListContainerBox";

interface funcProps {
  ingredients: ingredient[];
  onIngredientDelete: (id: number) => void;
}

const IngredientList: React.FC<funcProps> = (props) => {
  const isThereNoIngredients = props.ingredients?.length === 0;

  return (
    <ListContainerBox title="Ingredients">
      {isThereNoIngredients && <h1>No ingredients was added yet</h1>}
      {!isThereNoIngredients &&
        props.ingredients!.map((item, index) => (
          <IngredientItem
            key={index}
            ingredient={item}
            numberOfIngredient={index + 1}
            onIngredientDelete={props.onIngredientDelete}
          />
        ))}
    </ListContainerBox>
  );
};

export default IngredientList;
