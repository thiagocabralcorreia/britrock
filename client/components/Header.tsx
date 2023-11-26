import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface HeaderProps {
  children: React.ReactNode;
  dropdownMenu: React.ReactNode;
}

const Header = ({ children, dropdownMenu }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="fixed h-28 top-0 left-0 right-0 z-50"
    >
      <>
        <nav
          className="flex justify-between gap-2 md:gap-4 items-center
    w-full mx-auto px-10 h-28 z-50 bg-gray-900 text-white relative"
        >
          <div className="flex items-center justify-self-start">
            <div className="flex-shrink-0">
              <Link href={"/"}>
                <h1 className="font-germania text-[48px]">BRITROCK</h1>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-end col-span-1">
            <div className="flex items-baseline space-x-4 justify-self-end">
              {children}
            </div>
          </div>
        </nav>

        {dropdownMenu}
        <div className="flex flex-col items-center"></div>
      </>
    </motion.header>
  );
};

export default Header;
