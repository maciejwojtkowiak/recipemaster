import { motion } from "framer-motion";
import React from "react";

const animation = {
  scale: 0.5,
};

const PageAnimationWrapper: React.FC = (props) => {
  return <motion.div animate={animation}>{props.children}</motion.div>;
};

export default PageAnimationWrapper;
