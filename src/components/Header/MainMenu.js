import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <ul className="primary-nav-link">
       <li><Link to="/" className="primary-nav-link__a">Home</Link></li>
       <li><Link to="/about" className="primary-nav-link__a">About</Link></li>
       <li><Link to="/products" className="primary-nav-link__a">Products</Link></li>
       <li><Link to="/product-details" className="primary-nav-link__a">Product Detail</Link></li>
       <li><Link to="/product-categories" className="primary-nav-link__a">Categoires</Link></li>
       <li><Link to="/contact" className="primary-nav-link__a">Contact</Link></li>
     </ul>
  );
};
export default MainMenu;
