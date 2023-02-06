import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SectionTitle = (props) => {
  const {
    title,
    align,
    description,
    width,
    first
  }=props;
  
  return (
    <Fragment>
      <Row className="justify-content-center pt--40 pb--20">
        <Col lg={width}>
          <h3 className={`section__title text-${align}`}><span className="section__title-first">{first}</span> {title}</h3>
          <p className={`section__description text-${align}`}>
           {description}
          </p>
        </Col>
      </Row>
    </Fragment>
  );
};
export default SectionTitle;
