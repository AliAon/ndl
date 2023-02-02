import { Fragment } from "react";
import {Row,Col} from "react-bootstrap"
import {FaEnvelope} from "react-icons/fa"
const EmailAddress=(props)=>{
    return(
        <Fragment>
            <Row className="x-nowrap"> 

                <Col lg={props.iconwidth} xs={props.iconwidthsmall}>
                 <FaEnvelope size={15} color={props["icon-color"]}/>
                </Col>
                <Col  lg={10}>
                    <span className={`email-text color-${props.color}`}>www.reaganwireless.com</span>
                </Col>
            </Row>
       </Fragment>
    );
}
export default EmailAddress