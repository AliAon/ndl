import { Fragment } from "react";
import {Row,Col} from "react-bootstrap"
import {FaEnvelope} from "react-icons/fa"
import { Link } from "react-router-dom";
const EmailAddress=(props)=>{
    return(
        <Fragment>
            <Row className="x-nowrap"> 

                <Col lg={props.iconwidth} xs={props.iconwidthsmall}>
                 <FaEnvelope size={15} color={props["icon-color"]}/>
                </Col>
                <Col  lg={10} xs={10}>
                    <Link to="mailto:info@acflimo.com"><span className={`email-text color-${props.color}`}>info@acflimo.com</span></Link>
                </Col>
            </Row>
       </Fragment>
    );
}
export default EmailAddress