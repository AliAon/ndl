import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Autocomplete from "react-google-autocomplete";
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
  const apiKey="";
  const selectedFromPlaceHandler=(place)=>{
    console.log(place)
  }
  const selectedToPlaceHandler=(place)=>{
    console.log(place)
  }

  return (
    <Form>
      <Row className="mb-3">
        <Col lg={12} md={6} className="mb--20">
          <Form.Group as={Col} controlId="formGridEmail">
            <div className="input-from">
              <Row className="row align-items-center">
                <Col lg={1} xs={1}>
                  <span>
                    <FaCircle color="#9B8974" size={20} />
                  </span>
                </Col>
                <Col>
                  <Form.Label className="input-from__label">From</Form.Label>
                  <Autocomplete
                    className="form-control input-from__input shadow-none"
                    apiKey={apiKey}
                    placeholder="Address, airport, hotel "
                    onPlaceSelected={selectedFromPlaceHandler}
                  />
                </Col>
              </Row>
            </div>
          </Form.Group>
        </Col>
        <Col lg={12} md={6}>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <div className="input-from">
              <Row className="row align-items-center">
                <Col lg={1} xs={1}>
                  <span>
                    <FaCircle color="#9B8974" size={20} />
                  </span>
                </Col>
                <Col>
                  <Form.Label className="input-from__label">To</Form.Label>
                  <Autocomplete
                    className="form-control input-from__input shadow-none"
                    apiKey={apiKey}
                    placeholder="Address, airport, hotel "
                    onPlaceSelected={selectedToPlaceHandler}
                  />
                </Col>
              </Row>
            </div>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={6} xs={12}>
          <Form.Group controlId="formGridCity" className="mb-3">
            <div className="input-from">
              <Row className="row align-items-center">
                <Col lg={2} xs={1}>
                  <span>
                    <FaCalendar color="#9B8974" size={20} />
                  </span>
                </Col>
                <Col lg={10} xs={11}>
                  <Form.Label className="input-from__label">Date</Form.Label>
                  <Form.Control
                    type="date"
                    className="input-from__input input-from__input-date shadow-none"
                    placeholder="Select Date"
                  />
                </Col>
              </Row>
            </div>
          </Form.Group>
        </Col>
        <Col lg={6} md={6} xs={12} className="mb--20">
          <Form.Group controlId="formGridState">
            <div className="input-from input-from__num-of-hour">
              <Row className="row align-items-center">
                <Col lg={2} xs={1}>
                  <span>
                    <FaClock color="#9B8974" size={20} />
                  </span>
                </Col>
                <Col lg={10} xs={11}>
                  <Form.Label className="input-from__label">
                    No. of Hours
                  </Form.Label>
                  <Form.Select
                    className="input-from__input input-from__input-hours shadow-none"
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
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <div className="input-from">
          <Row className="row align-items-center">
            <Col lg={1} xs={1}>
              <span>
                <FaCar color="#9B8974" size={20} />
              </span>
            </Col>
            <Col lg={11} xs={11}>
              <Form.Label className="input-from__label">
                Select Vehicle
              </Form.Label>
              <Form.Select
                className="input-from__input input-from__input-hours shadow-none"
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
        <Col lg={6} md={6} xs={12} className="mb-3">
          <Form.Group controlId="formGridCity">
            <div className="input-from">
              <Row className="row align-items-center">
                <Col lg={2} xs={1}>
                  <span>
                    <FaUserFriends color="#9B8974" size={20} />
                  </span>
                </Col>
                <Col lg={10} xs={11}>
                  <Form.Label className="input-from__label">
                    Allowed Passengers
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="input-from__input shadow-none"
                    placeholder="Allowed Passengers"
                  />
                </Col>
              </Row>
            </div>
          </Form.Group>
        </Col>
        <Col lg={6} md={6} xs={12}>
          <Form.Group controlId="formGridState">
            <div className="input-from">
              <Row className="row align-items-center">
                <Col lg={2} xs={1}>
                  <span>
                    <FaLuggageCart color="#9B8974" size={20} />
                  </span>
                </Col>
                <Col>
                  <Form.Label className="input-from__label">
                    Allowed Baggage
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="input-from__input shadow-none"
                    placeholder="Allowed Baggage"
                  />
                </Col>
              </Row>
            </div>
          </Form.Group>
        </Col>
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
