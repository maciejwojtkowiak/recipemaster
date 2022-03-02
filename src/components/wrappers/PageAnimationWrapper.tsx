import { motion } from "framer-motion";
import React from "react";

const animation = {
  visible: {
    transition: {
      duration: 0.6,
    },
    opacity: 1,
  },
  hidden: { opacity: 0 },
};

const PageAnimationWrapper: React.FC = (props) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={animation}>
      {props.children}
    </motion.div>
  );
};

export default PageAnimationWrapper;
