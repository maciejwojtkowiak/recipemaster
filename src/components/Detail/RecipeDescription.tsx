import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface recipeDesc {
  title: string;
}

const animation = {
  scale: 0.5,
};

const RecipeDescription: React.FC<recipeDesc> = (props) => {
  return (
    <Box marginLeft="2rem">
      <Text fontSize="4rem" fontWeight="700">
        <motion.div animate={animation}>Siema</motion.div>
        {props.title}
      </Text>
    </Box>
  );
};

export default RecipeDescription;
