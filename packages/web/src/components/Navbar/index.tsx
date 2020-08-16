import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface NavLinkProps {
  href: string;
  value: string;
  classes?: string;
}

const NavLink = ({
  href,
  value,
  classes,
}: NavLinkProps): React.ReactElement => (
  <Link href="#">
    <span
      className={`${classes} mt-2 sm:mt-0 font-semibold hover:bg-primary hover:text-white px-2 py-1 rounded cursor-pointer block`}
    >
      {value}
    </span>
  </Link>
);

const Navbar = (): React.ReactElement => {
  const [openMenu, openMenuSet] = useState(false);

  return (
    <header
      className={`text-gray-800 py-3 px-2 sm:mx-auto lg:container ${
        openMenu ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex justify-end">
        <div className="flex gap-2">
          <Link href="#">
            <a>
              <FaInstagram
                size={30}
                color="#F99D1C"
                className="cursor-pointer"
              />
            </a>
          </Link>
          <Link href="#">
            <a>
              <FaFacebook
                size={30}
                color="#F99D1C"
                className="cursor-pointer"
              />
            </a>
          </Link>
          <Link href="#">
            <a>
              <FaLinkedin
                size={30}
                color="#F99D1C"
                className="cursor-pointer"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className=" md:flex md:items-center md:justify-between ">
        <div className="flex justify-between items-center p-2 ">
          <div>
            <h2 className="hover:text-cool-gray-600 focus:text-cool-gray-600 text-xl font-bold">
              <Link href="/">Ong Mais Uniãos</Link>
            </h2>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => openMenuSet(!openMenu)}
              className="block hover:text-cool-gray-600 focus:text-cool-gray-600 outline-none w-6 h-6"
            >
              {openMenu ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>
        <div
          className={`${openMenu ? "block" : "hidden"} md:flex items-center`}
        >
          <NavLink href="about" value="Sobre nós" classes="mr-2" />
          <NavLink href="projects" value="Projetos" classes="mr-2" />
          <NavLink href="donations" value="Contribua" classes="mr-2" />
          <NavLink href="news" value="Notícias" classes="mr-2" />
          <NavLink href="store" value="Moeda Social" classes="mr-2" />
          <NavLink href="store" value="Transparência" classes="mr-2" />
          <NavLink href="contact" value="Fale com a gente" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
