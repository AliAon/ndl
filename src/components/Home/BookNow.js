import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const BookNow = () => {
  return (
    <Row className="section-booknow row align-items-center">
      <Col>
        <Form>
          <Row className="mb-3 row align-items-center">
            <Form.Group as={Col} controlId="formGridCity">
              <div className=" formgroup-one">
                <Form.Label className="section-booknow__label">
                  DCSSCFA
                </Form.Label>
                <Form.Control type="date" className="date-one" color="red" />
              </div>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity formgroup-two">
              <div className=" formgroup-one">
                <Form.Label className="section-booknow__label">
                  ADDADA
                </Form.Label>
                <Form.Control type="date" className="date-two" />
              </div>
            </Form.Group>
            <Form.Group as={Col} controlId="section-booknow__map-input">
              <Form.Label className="section-booknow__label">SSSS:</Form.Label>
              <Form.Control type="text" className="section-booknow__map-input"/>
            </Form.Group>
            <Form.Group as={Col} controlId="section-booknow__car-input" >
              <Form.Label className="section-booknow__label">SSSSSS</Form.Label>
              <Form.Control type="text" className="section-booknow__car-input" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Button className="section-booknow__btn" type="submit">
                BookNow
              </Button>{" "}
            </Form.Group>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
export default BookNow;
