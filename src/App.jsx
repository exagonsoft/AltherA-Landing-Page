import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import WalletConnector from "./components/WalletConnector/WalletConnector";
import Welcome from "./components/Welcome";

const navClass = {
  normalState: "nav navbar smooth-transition w-full flex md:justify-center justify-between items-center p-2",
  scrollDownState: "nav navStick InFromUP fixed smooth-transition  navbar w-full flex md:justify-center justify-between items-center p-2",
  scrollUpState: "nav navStick OutFormUP fixed smooth-transition  navbar w-full flex md:justify-center justify-between items-center p-2"
}

function App() {
  const[steakNav, setSteakNav] = useState(navClass.normalState);

  const handleScroll = () =>{
    let nav = document.getElementsByClassName('nav')
    let _nav_heigth = nav[0].clientHeight
    if(window.scrollY >= _nav_heigth){
      setSteakNav(navClass.scrollDownState)
    } else {
      setSteakNav(navClass.normalState)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* <WalletConnector /> */}
      <div className="gradient-bg-welcome">
        <NavBar navClass={steakNav}/>
        <Welcome />
      </div>
      <About />
    </div>
  );
}

export default App;
