import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {
  FaCalendar,
  FaCar,
  FaCircle,
  FaClock,
  FaLuggageCart,
  FaPeopleCarry,
  FaUser,
  FaUserFriends,
} from "react-icons/fa";

function GetQuoteForm() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <div className="input-from">
            <Row className="row align-items-center">
              <Col lg={1}>
                <span>
                  <FaCircle color="#9B8974" size={20} />
                </span>
              </Col>
              <Col>
                <Form.Label className="input-from__label">From</Form.Label>
                <Form.Control
                  type="text"
                  className="input-from__input"
                  placeholder="Address, airport, hotel "
                />
              </Col>
            </Row>
          </div>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <div className="input-from">
          <Row className="row align-items-center">
            <Col lg={1}>
              <span>
                <FaCircle color="#9B8974" size={20} />
              </span>
            </Col>
            <Col>
              <Form.Label className="input-from__label">To</Form.Label>
              <Form.Control
                type="text"
                className="input-from__input"
                placeholder="Address, airport, hotel "
              />
            </Col>
          </Row>
        </div>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <div className="input-from">
            <Row className="row align-items-center">
              <Col lg={2}>
                <span>
                  <FaCalendar color="#9B8974" size={20} />
                </span>
              </Col>
              <Col>
                <Form.Label className="input-from__label">Date</Form.Label>
                <Form.Control
                  type="date"
                  className="input-from__input input-from__input-date"
                  placeholder="Select Date"
                />
              </Col>
            </Row>
          </div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <div className="input-from">
            <Row className="row align-items-center">
              <Col lg={2}>
                <span>
                  <FaClock color="#9B8974" size={20} />
                </span>
              </Col>
              <Col>
                <Form.Label className="input-from__label">
                  No. of Hours
                </Form.Label>
                <Form.Select
                  className="input-from__input input-from__input-hours"
                  aria-label="Default select example"
                >
                  <option>Select hours</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Row>
          </div>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <div className="input-from">
          <Row className="row align-items-center">
            <Col lg={1}>
              <span>
                <FaCar color="#9B8974" size={20} />
              </span>
            </Col>
            <Col>
              <Form.Label className="input-from__label">
                Select Vehicle
              </Form.Label>
              <Form.Select
                  className="input-from__input input-from__input-hours"
                  aria-label="Default select example"
                >
                  <option>Chrysler 300 Limousine</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
            </Col>
          </Row>
        </div>
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <div className="input-from">
            <Row className="row align-items-center">
              <Col lg={2}>
                <span>
                  <FaUserFriends color="#9B8974" size={20} />
                </span>
              </Col>
              <Col>
                <Form.Label className="input-from__label">
                  Allowed Passengers
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input-from__input"
                  placeholder=""
                />
              </Col>
            </Row>
          </div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <div className="input-from">
            <Row className="row align-items-center">
              <Col lg={2}>
                <span>
                  <FaLuggageCart color="#9B8974" size={20} />
                </span>
              </Col>
              <Col>
                <Form.Label className="input-from__label">
                  Allowed Baggage{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input-from__input"
                  placeholder=""
                />
              </Col>
            </Row>
          </div>
        </Form.Group>
      </Row>
      <Button
        variant="primary"
        className="btn-block section-getquote__form-btn"
        type="submit"
      >
        GET A QUOTE
      </Button>
    </Form>
  );
}

export default GetQuoteForm;
