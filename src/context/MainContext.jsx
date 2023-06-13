import react, { useState, useEffect } from "react";

export const MainContext = react.createContext();
const { ethereum } = window;

export const MainContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toastNotificationList, setToastNotificationList] = useState([])
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum object.");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum object.");
    }
  };

  const pushNotification = (_notification, message = null) => {
    let _new_toast = {
      type: _notification,
      text: message
    }
    setToastNotificationList([...toastNotificationList, _new_toast])
  }

  const walletAccountChange = async (accounts) => {
    if (currentAccount !== accounts[0] && currentAccount !== "") {
      setCurrentAccount(accounts[0]);
    }
    getAllTransactions();
  };

  useEffect(() => {
    //checkIfWalletIsConnected();
  }, []);

  return (
    <MainContext.Provider
      value={{
        connectWallet,
        currentAccount,
        isLoading,
        walletAccountChange,
        toastNotificationList,
        pushNotification,
        setToastNotificationList
      }}
    >
      {children}
    </MainContext.Provider>
  );
};