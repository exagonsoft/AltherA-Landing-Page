import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { shortenAddress } from "../../utils/ShortAddress";

export const NavBarActionButton = () => {
  const { connectWallet, currentAccount } = useContext(MainContext);
  return (
    <>
      <li onClick={currentAccount ? null : connectWallet}  className="navBarButton bg-[#000644] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#15119f] ml-10">
        {currentAccount ? 
        shortenAddress(currentAccount) : 'Connect To Wallet'}
      </li>
    </>
  );
};
