import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { NavBarMenuList } from "./NavBarMenu";
import { NavBarMenuItem } from "./NavBarManuItem";
import { NavBarActionButton } from "./NavBarActionButton";

export const NavBarMobile = (props) => {
  const { connectWallet, currentAccount } = useContext(MainContext);
  return (
    <>
      <div className="flex relative">
        {props.toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => props.setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => props.setToggleMenu(true)}
          />
        )}
        {props.toggleMenu && (
          <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md  Shining-glassMorphin text-white animate-slide-in animate-slide-out'>
            <li className="text-xl w-full my-2">
              <AiOutlineClose className="cursor-pointer" onClick={() => props.setToggleMenu(false)} />
            </li>
            {props.menuList.map((item, index) => (
            <NavBarMenuItem
              key={index}
              linkUrl={item.linkUrl}
              linkText={item.linkText}
              classProps="my-2 text-lg"
            />
          ))}
          </ul>
        )}
      </div>
    </>
  );
};
