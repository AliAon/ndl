import { Fragment } from "react";
import {Row,Col} from "react-bootstrap"
import {FaMapMarkerAlt} from "react-icons/fa"
const LocationAddress=(props)=>{
    return(
        <Fragment>
            <Row>
              <Col lg={props.iconwidth}>
                 <FaMapMarkerAlt size={15} color={props["icon-color"]}/>
                </Col>
                <Col  lg={10}>
                    <span className={`email-text color-${props.color}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </span>
                </Col>
            </Row>
       </Fragment>
    );
}
export default LocationAddress