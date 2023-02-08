import { Fragment } from "react";
import {Row,Col} from "react-bootstrap"
import {FaPhoneAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
const PhoneNo=(props)=>{
    return(
        <Fragment>
            <Row className="x-nowrap"> 
              <Col lg={props.iconwidth} xs={props.iconwidthsmall}>
                 <FaPhoneAlt size={14} color={props["icon-color"]}/>
                </Col>
                <Col  lg={10} xs={10}>
                    <Link to="tel:2033685511"><span className={`phone-text color-${props.color}`}>203-368-5511</span></Link>
                </Col>
            </Row>
       </Fragment>
    );
}
export default PhoneNo