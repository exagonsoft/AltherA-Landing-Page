export const NavBarMenuItem = (props) => {
    return <>
       <li className="navBarItem">
        <a href={props.linkUrl}><h3>{props.linkText}</h3></a>
       </li>
    </>;
  };