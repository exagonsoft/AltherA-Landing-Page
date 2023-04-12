import about  from "./aboutSection.webp";
import shopping from "./shopping.gif";
import screens from "./screens.gif";
import shutter from "./shutter.gif";
import driving from "./driving.gif";
import playtoearn01 from "./playtoearn01.png";
import gamestrofies from "./gamestrofies.png"

const pictureMap = {
    1: shopping,
    2: screens,
    3: shutter,
    4: driving,
    5: playtoearn01,
    6: gamestrofies
  };

export {
    about,
    shopping,
    screens,
    shutter,
    driving,
    playtoearn01,
    gamestrofies
}

export const GetRandomPicture = () => {
    let _index = Math.floor(Math.random() * 6) + 1;
    return pictureMap[_index]
}