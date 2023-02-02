import { Fragment } from "react";
import { Col,Row } from "react-bootstrap";
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa';
const SocialLinks=(props)=>{
    return(
        <Fragment>
            <Row>
                <Col>
                   <FaFacebook color={props.color}/>
                </Col>
                <Col>
                   <FaInstagram color={props.color}/>
                </Col>
                <Col>
                 <FaTwitter color={props.color}/>
                </Col>
                <Col>
                  <FaLinkedin color={props.color}/>
                </Col>
            </Row>
        </Fragment>
    );
}
export default SocialLinks