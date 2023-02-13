import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Autocomplete from "react-google-autocomplete";
import DatePicker from "react-datepicker";
import { GiPathDistance, GiDuration } from "react-icons/gi";
import "react-datepicker/dist/react-datepicker.css";
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
const apiKey = "AIzaSyDR6G4AS86R9DJssrIMxtm1KV875LZzbgA";

function GetQuoteForm(props) {
  const [cars, setCars] = useState([]);
  const [fromlocation, setFromlocation] = useState({});
  const [tolocation, setTolocation] = useState({});
  const [carname, setCarname] = useState("");
  const [bookdate, setDate] = useState(new Date());
  const [booktime, setTime] = useState(new Date());
  const [passenger, setPassenger] = useState("");
  const [luggage, setLuggage] = useState("");
  const [bookme, setBookme] = useState({});

  const selectedFromPlaceHandler = (place) => {
    if(place){
      const {lat,lng}=place.geometry.location
      const latvalue=lat()
      const lngvalue=lng()
      const origin = {
        lat: latvalue,
        lng: lngvalue
      };
      setFromlocation(origin);
    }else{
      setFromlocation({})
    }
  };
  const selectedToPlaceHandler = (place) => {
    if(place){
      const {lat,lng}=place.geometry.location
      const latvalue=lat()
      const lngvalue=lng()
      const destination = {
        lat: latvalue,
        lng: lngvalue
      };
      setTolocation(destination);
    }else{
      setFromlocation({})
    }
  };

  // Get Cars Data
  const GetCars = async () => {
    const response = await fetch("http://localhost:9999/car/allrecord");
    const Resultdata = await response.json();
    const { data } = Resultdata;
    if (data) {
      setCars(data);
    } else {
      setCars([]);
    }
  };
  useEffect(() => {
    GetCars();
  }, []);

  //Car Select handler
  const onCarSelectHandler = (e) => {
    const car = cars.find((el) => {
      return el._id == e.target.value;
    });
    setCarname(car.car_name);
    setPassenger(car.no_of_passengers);
    setLuggage(car.allowed_buggage);

    //SetDistanceMatrix Fileds Origin and Destination
    props.onMapDirection(fromlocation,tolocation)
  };

  //Time Handler
  const timeHandler = (e) => {
    setTime(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    setBookme({
      from: fromlocation,
      to: tolocation,
      bookdate: bookdate,
      booktime: booktime,
      car: carname,
      passenger: passenger,
      luggage: luggage,
    });
  };

  return (
    <Form onSubmit={submitFormHandler}>
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
                    required
                    className="form-control input-from__input shadow-none"
                    apiKey={apiKey}
                    placeholder="Address, airport, hotel "
                    onPlaceSelected={selectedFromPlaceHandler}
                    options={{
                      types: ["(regions)"],
                    }}
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
                    required
                    className="form-control input-from__input shadow-none"
                    apiKey={props.apiKey}
                    placeholder="Address, airport, hotel "
                    onPlaceSelected={selectedToPlaceHandler}
                    options={{
                      types: ["(regions)"],
                    }}
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
                  <Form.Label className="input-from__label">
                    Choose Date
                  </Form.Label>

                  <DatePicker
                    className="input-from__input input-from__input-date shadow-none"
                    placeholderText="Select Date"
                    selected={bookdate}
                    onChange={(date) => setDate(date)}
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
                    Select Hours
                  </Form.Label>
                  <DatePicker
                    className="input-from__input input-from__input-date shadow-none"
                    placeholderText="Select Time"
                    showTimeSelectOnly
                    showTimeSelect
                    selected={booktime}
                    onChange={(date) => setTime(date)}
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
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
                onChange={onCarSelectHandler}
                required
                className="input-from__input input-from__input-hours shadow-none"
                aria-label="Default select example"
              >
                <option>Select Vehicle</option>

                {cars.map((el) => {
                  return <option value={el._id}>{el.car_name}</option>;
                })}
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
                    required
                    value={passenger}
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
                    Allowed Luggage
                  </Form.Label>
                  <Form.Control
                    value={luggage}
                    type="text"
                    required
                    className="input-from__input shadow-none"
                    placeholder="Allowed Luggage"
                  />
                </Col>
              </Row>
            </div>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={6} md={6} xs={12} className="mb-3">
          <Form.Group controlId="formGridCity">
            <div className="input-from">
              <Row className="row align-items-center">
                <Col lg={2} xs={1}>
                  <span>
                    <GiPathDistance color="#9B8974" size={20} />
                  </span>
                </Col>
                <Col lg={10} xs={11}>
                  <Form.Label className="input-from__label">
                    Distance
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    className="input-from__input shadow-none"
                    placeholder="Distance"
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
                    <GiDuration color="#9B8974" size={20} />
                  </span>
                </Col>
                <Col>
                  <Form.Label className="input-from__label">
                    Duration
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    className="input-from__input shadow-none"
                    placeholder="Duration"
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
