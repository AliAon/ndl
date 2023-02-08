import { Fragment } from "react";
import { Col,Row } from "react-bootstrap";
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";
const SocialLinks=(props)=>{
    return(
        <Fragment>
            <Row>
                <Col>
                   <Link to="/"><FaFacebook color={props.color}/></Link>
                </Col>
                <Col>
                <Link to="/"><FaInstagram color={props.color}/></Link>
                </Col>
                <Col>
                <Link to="/"><FaTwitter color={props.color}/></Link>
                </Col>
                <Col>
                <Link to="/"><FaLinkedin color={props.color}/></Link>
                </Col>
            </Row>
        </Fragment>
    );
}
export default SocialLinks