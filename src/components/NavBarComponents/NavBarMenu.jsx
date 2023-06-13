import { NavBarActionButton } from "./NavBarActionButton";
import { NavBarMenuItem } from "./NavBarManuItem";

export const NavBarMenuList = (props) => {
  const {actionButtonText} = props
  return (
    <>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {props.menuList.map((item, index) => (
            <NavBarMenuItem
              key={index}
              linkUrl={item.linkUrl}
              linkText={item.linkText}
            />
          ))}
          <NavBarActionButton linkURL={''} text={actionButtonText}/>
        </ul>
    </>
  );
};
