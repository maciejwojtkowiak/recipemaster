import { ingredient } from "../../../shared/types/Recipe";

import ItemBox from "../UI/ItemBox";

type funcProps = {
  ingredient: ingredient;
  numberOfIngredient: number;
  onIngredientDelete: (id: number) => void;
};

const IngredientItem: React.FC<funcProps> = (props) => {
  const onDeleteIngredient = (id: number) => {
    props.onIngredientDelete(id);
  };

  return (
    <ItemBox
      onRemove={onDeleteIngredient}
      isIngredient={true}
      itemId={props.ingredient.id!}
      itemName={props.ingredient.name!}
      ingredientAmount={props.ingredient.amount!}
      ingredientUnit={props.ingredient.unit!}
    />
  );
};

export default IngredientItem;
