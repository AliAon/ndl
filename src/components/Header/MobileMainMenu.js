import { Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const MobileMainMenu = () => {
  return (
    <ul className="primary-nav-link-mobile">
      <li><Link to="/" className="primary-nav-link-mobile__a">Home</Link></li>
      <li><Link to="/about" className="primary-nav-link-mobile__a">About</Link></li>
      <li><Link to="/products" className="primary-nav-link-mobile__a">Products</Link></li>
      <li><Link to="/product-details" className="primary-nav-link-mobile__a">Product Detail</Link></li>
      <li><Link to="/product-categories" className="primary-nav-link-mobile__a">Categoires</Link></li>
      <li><Link to="/contact" className="primary-nav-link-mobile__a">Contact</Link></li>
    </ul>
  );
};
export default MobileMainMenu;
