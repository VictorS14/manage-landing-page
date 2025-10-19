export const NavBarLinks = ({...props}) => {
  return (
    <ul className={props.className}>
      <li className="navbar-links">Pricing</li>
      <li className="navbar-links">Products</li>
      <li className="navbar-links">About Us</li>
      <li className="navbar-links">Carrers</li>
      <li className="navbar-links">Community</li>
    </ul>
  );
};
