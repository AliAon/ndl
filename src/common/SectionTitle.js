import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SectionTitle = (props) => {
  const {
    title,
    align,
    description,
    width,
    subtitle,
    first
  }=props;
  
  return (
    <Fragment>
      <Row className="justify-content-center pt--40 pb--20 row__section-title">
        <Col lg={width}>
          <h6 className={`section__subtitle text-${align}`}>{subtitle}</h6>
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
