import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
const IconTopBox = (props) => {
  return (
    <Fragment>
      <Row>
        <Col>
          <div className="IconTopBox">
            <div className="IconTopBox__icon">
             {props.icon}
            </div>
            <h4 className="IconTopBox__title">{props.title}</h4>
            <p className="IconTopBox__description">
              {props.description}
            </p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default IconTopBox;
