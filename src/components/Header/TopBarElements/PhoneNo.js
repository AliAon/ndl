import { Fragment } from "react";
import {Row,Col} from "react-bootstrap"
import {FaPhoneAlt} from "react-icons/fa"
const PhoneNo=(props)=>{
    return(
        <Fragment>
            <Row className="x-nowrap"> 
              <Col lg={props.iconwidth} xs={props.iconwidthsmall}>
                 <FaPhoneAlt size={14} color={props["icon-color"]}/>
                </Col>
                <Col  lg={10}>
                    <span className={`phone-text color-${props.color}`}>1-877-724-3266</span>
                </Col>
            </Row>
       </Fragment>
    );
}
export default PhoneNo