import ItemBox from "../UI/ItemBox";

interface funcProps {
  step: string;
}

const StepItem: React.FC<funcProps> = (props) => {
  return <ItemBox>{props.step}</ItemBox>;
};

export default StepItem;
