import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SectionTitle = (props) => {
  return (
    <Fragment>
      <Row className="justify-content-center pt--20 pb--20">
        <Col lg={props.width}>
          <h3 className={`section__title text-${props.align}`}>{props.title}</h3>
          <p className={`section__description text-${props.align}`}>
           {props.description}
          </p>
        </Col>
      </Row>
    </Fragment>
  );
};
export default SectionTitle;
