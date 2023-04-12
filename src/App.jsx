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
    "nav navbar FadeIn !relative smooth-transition w-full flex md:justify-center justify-between items-center p-2",
  hiddenState:
    "nav navbar FadeOut !relative smooth-transition w-full flex md:justify-center justify-between items-center p-2",
  scrollDownState:
    "nav navStick InFromUP !fixed smooth-transition  navbar w-full flex md:justify-center justify-between items-center p-2",
  dinamicNormalState:
    "nav navStick -top-32 !fixed smooth-transition  navbar w-full flex md:justify-center justify-between items-center p-2",
};

function App() {
  const { toastNotificationList, setToastNotificationList } =
    useContext(MainContext);
  const [steakNav, setSteakNav] = useState(navClass.dinamicNormalState);
  const [fixedNav, setFixedNav] = useState(navClass.normalState);
  const [playAboutVideo, setplayAboutVideo] = useState(false);

  const handleScroll = () => {
    let nav = document.getElementById("fixed");
    let _nav_heigth = nav.clientHeight;
    if (window.scrollY >= _nav_heigth) {
      setSteakNav(navClass.scrollDownState);
      setFixedNav(navClass.hiddenState);
    } else {
      setSteakNav(navClass.dinamicNormalState);
      setFixedNav(navClass.normalState);
    }

    if(window.scrollY >= 240){
      setplayAboutVideo(true)
    }else{
      setplayAboutVideo(false)
    }
  };

  const removeToast = (_newlist) => {
    setToastNotificationList(_newlist);
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
        <div className="gradient-bg-welcome">
          <NavBar id="fixed" navClass={fixedNav} />
          <NavBar id="dinamic" navClass={steakNav} />
          <Welcome />
        </div>
        <About play={playAboutVideo}/>
        {/* <Maintain speenerWith={"70%"} speenerMinWidt={"60%"} /> */}
      </div>
    </>
  );
}

export default App;
