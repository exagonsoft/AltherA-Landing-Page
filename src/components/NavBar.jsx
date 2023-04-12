import React, { useContext, useEffect, useState } from "react";
import { NavBarMenuList } from "./NavBarComponents/NavBarMenu";
import logo from "../assets/images/LogoAlthera.webp";
import { MainContext } from "../context/MainContext";
import { shortenAddress } from "../utils/ShortAddress";
import { NavBarMobile } from "./NavBarComponents/NavBarMovile";
import { NavBarItems } from "./NavBarComponents/NavBarItems";

const NavBar = (props) => {
  const { navClass, id } = props;
  const menuItems = NavBarItems;
  const { currentAccount, walletAccountChange } = useContext(MainContext);
  const [actionButtonText, setActionButtonText] = useState("Connect to Wallet");
  const [toggleMenu, setToggleMenu] = useState(false);
  const { ethereum } = window;

  ethereum.on("accountsChanged", async (accounts) => {
    walletAccountChange(accounts);
  });

  useEffect(() => {
    if (currentAccount) {
      setActionButtonText(shortenAddress(currentAccount));
    }
  }, [currentAccount]);

  return (
    <>
      <nav id={id} className={navClass}>
        <div className="md:flex-[0.5] logo flex flex-initial justify-center items-center">
          <div>
            <img src={logo} alt="Logo" className="w-20 cursor-pointer" />
          </div>
          <div>
            <h1 className="logoText cursor-pointer">AltherA</h1>
          </div>
        </div>
        <NavBarMenuList
          menuList={menuItems}
          actionButtonText={actionButtonText}
        />
        <NavBarMobile
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          menuList={menuItems}
          actionButtonText={actionButtonText}
        />
      </nav>
    </>
  );
};

export default NavBar;
