import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";

import Header from "./Header";

import { ILink, links } from "../data/links";
import DropdownMenuButton from "./DropdownMenuButton";
import DropdownMenu from "./DropdownMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeDropdownMenu = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    closeDropdownMenu();

    window.addEventListener("resize", closeDropdownMenu);

    return () => {
      window.removeEventListener("resize", closeDropdownMenu);
    };
  }, []);

  return (
    <div>
      <Header
        children={
          <div className="flex content-between">
            <DropdownMenuButton
              onClick={() => setIsOpen(!isOpen)}
              isOpen={isOpen}
            />
            {links.map(({ id, href, name }: ILink) => {
              return (
                <Link
                  key={id}
                  href={href}
                  className="hidden lg:block header-link m-4 py-1 transition ease-out duration-900 text-lg
                  hover:border-b"
                >
                  {name}
                </Link>
              );
            })}
            <div className="ml-8 my-4 py-1">
              <div className="flex items-center cursor-pointer">
                <LuLogOut />
                <p className="hidden lg:block header-link pl-2 transition ease-out duration-900 text-lg">
                  Logout
                </p>
              </div>
            </div>
          </div>
        }
        dropdownMenu={
          <DropdownMenu show={isOpen} onClose={() => setIsOpen(false)} />
        }
      />
      <div>{children}</div>
    </div>
  );
}
