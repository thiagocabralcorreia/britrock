import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="text-lg py-2.5 sm:py-3 px-6 shadow-lg duration-500 border-0
      bg-gray-900 hover:bg-gray-800 text-white"
    >
      <div className="flex justify-center items-center m-auto">{children}</div>
    </motion.button>
  );
};

export default Button;
