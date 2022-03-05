import { Button } from "@chakra-ui/react";

const FormSubmitButton = () => {
  return (
    <Button
      width="30%"
      bgGradient="linear(to-r, orange.300, orange.400)"
      color="white"
      justifySelf="center"
      type="submit"
      _hover={{
        bgGradient: "linear(to-r, orange.200, orange.400)",
      }}
    >
      Submit
    </Button>
  );
};

export default FormSubmitButton;
