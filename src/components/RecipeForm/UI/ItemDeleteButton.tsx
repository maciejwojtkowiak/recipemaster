import { Button } from "@chakra-ui/react";

interface funcProps {
  onRemove: (id: number) => void;
  itemId: number;
}

const ItemDeleteButton: React.FC<funcProps> = (props) => {
  return (
    <Button
      _hover={{
        bgColor: "red",
      }}
      minW="3vh"
      minH="3vh"
      bgColor="red.300"
      color="white"
      onClick={() => props.onRemove(props.itemId)}
    >
      X
    </Button>
  );
};

export default ItemDeleteButton;
