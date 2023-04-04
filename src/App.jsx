import { useContext, useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import WalletConnector from "./components/WalletConnector/WalletConnector";
import Welcome from "./components/Welcome";
import { MainContext } from "./context/MainContext";
import Maintain from "./pages/Maintaining/maintain";
import EXNotification from "./shared/Notifications/EXNotification";

const navClass = {
  normalState:
    "nav navbar smooth-transition w-full flex md:justify-center justify-between items-center p-2",
  scrollDownState:
    "nav navStick InFromUP !fixed smooth-transition  navbar w-full flex md:justify-center justify-between items-center p-2",
  scrollUpState:
    "nav navStick OutFormUP fixed smooth-transition  navbar w-full flex md:justify-center justify-between items-center p-2",
};

function App() {
  const {toastNotificationList, setToastNotificationList} = useContext(MainContext);
  const [steakNav, setSteakNav] = useState(navClass.normalState);

  const handleScroll = () => {
    let nav = document.getElementsByClassName("nav");
    let _nav_heigth = nav[0].clientHeight;
    if (window.scrollY >= _nav_heigth) {
      setSteakNav(navClass.scrollDownState);
    } else {
      setSteakNav(navClass.normalState);
    }
  };

  const removeToast = (_newlist) => {
    setToastNotificationList(_newlist)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <EXNotification
        toastList={toastNotificationList}
        closeToast={removeToast}
      ></EXNotification>
      <div className="min-h-screen">
        {/* <div className="gradient-bg-welcome">
        <NavBar navClass={steakNav}/>
        <Welcome />
      </div>
      <About /> */}
        <Maintain speenerWith={"70%"} speenerMinWidt={"60%"} />
      </div>
    </>
  );
}

export default App;
