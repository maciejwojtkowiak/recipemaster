type funcProps = {
  ingredientName: string;
  numberOfIngredient: number;
};

const IngredientItem: React.FC<funcProps> = (props) => {
  return (
    <div>
      <h1>{props.ingredientName}</h1>
    </div>
  );
};

export default IngredientItem;
