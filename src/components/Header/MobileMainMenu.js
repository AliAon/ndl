import { Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const MobileMainMenu = () => {
  return (
    <ul className="primary-nav-link-mobile">
      <li><Link to="/" className="primary-nav-link-mobile__a">Home</Link></li>
      <li><Link to="/about-us" className="primary-nav-link-mobile__a">About Us</Link></li>
      <li><Link to="/our-fleet" className="primary-nav-link-mobile__a">Our Fleet</Link></li>
      <li><Link to="/services" className="primary-nav-link-mobile__a">Services</Link></li>
      <li><Link to="/blog" className="primary-nav-link-mobile__a">Blog</Link></li>
      <li><Link to="/contact" className="primary-nav-link-mobile__a">Contact</Link></li>
    </ul>
  );
};
export default MobileMainMenu;
