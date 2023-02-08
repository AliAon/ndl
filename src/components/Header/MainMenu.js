import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <ul className="primary-nav-link">
      <Link to="/"><li className="primary-nav-link__a">Home</li></Link>
      <li className="primary-nav-link__a">About</li>
      <Link to="/our-fleet"><li className="primary-nav-link__a">Our Fleet</li></Link>
      <li className="primary-nav-link__a">Services</li>
      <li className="primary-nav-link__a">Blog</li>
      <li className="primary-nav-link__a">Contact</li>
    </ul>
  );
};
export default MainMenu;
