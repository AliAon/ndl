import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const ContactForm = (props) => {
  const type = "checkbox";
  return (
    <Fragment>
      <Row className="justify-content-center pt--20 pb--20">
        <Col lg={props.width}>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" className="contact-form__form-input" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"   className="contact-form__form-input"/>
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Label>Subject</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="" className="mb-4">
              <Form.Control
                as="textarea"
                placeholder=""
                style={{ height: "100px" }}
                className="contact-form__form-input"
              />
            </FloatingLabel>
            <Row>
              <Col xs={12}>
                <Form.Check
                  inline
                  label="Accept Terms & Condition"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
              </Col>
              <Col xs={12}>
                <Button className="contact-form__submit-btn" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};
export default ContactForm;
