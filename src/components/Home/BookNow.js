import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const BookNow = () => {
  return (
    <Row className="section-booknow row align-items-center justify-content-around">
    <Form>
      <Row className="align-items-center justify-content-evenly ">
        <Col lg={2} xs={6}>
          <Form.Group controlId="formGridCity">
            <div className=" formgroup-one">
              <Form.Label className="section-booknow__label">
                DCSSCFA
              </Form.Label>
              <Form.Control type="date" className="date-one" color="red" />
            </div>
          </Form.Group>
        </Col>
        <Col xs={6} lg={2}>
          <Form.Group controlId="formGridCity formgroup-two">
            <div className=" formgroup-one">
              <Form.Label xs={12} className="section-booknow__label">
                ADDADA
              </Form.Label>
              <Form.Control xs={12} type="date" className="date-two" />
            </div>
          </Form.Group>
        </Col>
        <Col xs={6} lg={2}>
          <Form.Group controlId="section-booknow__map-input">
            <Form.Label className="section-booknow__label">SSSS:</Form.Label>
            <Form.Control
              type="text"
              className="section-booknow__map-input"
            />
          </Form.Group>
        </Col>
        <Col xs={6} lg={2}>
          <Form.Group controlId="section-booknow__car-input">
            <Form.Label className="section-booknow__label">SSSSSS</Form.Label>
            <Form.Control
              type="text"
              className="section-booknow__car-input"
            />
          </Form.Group>
        </Col>
        <Col lg={2}>
          <Form.Group controlId="formGridCity">
            <div className="text-center">
              <Button className="section-booknow__btn" type="submit">
                BookNow
              </Button>
            </div>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  </Row>

  );
};
export default BookNow;
