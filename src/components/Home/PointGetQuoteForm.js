import { Fragment, useEffect, useState } from "react";
import { BASE_URL } from "../../common/Config";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import Autocomplete from "react-google-autocomplete";
import DatePicker from "react-datepicker";
import { GiPathDistance, GiDuration } from "react-icons/gi";
import { MdPaid } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
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
import Test from "../../pages/Test";
import MyVerticallyCenteredModal from "./QuoteFormInput/MyVerticallyCenteredModal";
import MessagesInfo from "../../common/MessagesInfo";
const apiKey = "AIzaSyDR6G4AS86R9DJssrIMxtm1KV875LZzbgA";

function PointGetQuoteForm(props) {
  const [cars, setCars] = useState([]);
  const [disabled, setgetQuotbtnenabled] = useState("disabled");
  const [IsshowMessageForm, SetIsshowMessageForm] = useState(false);
  const [disabledselectcar, Setdisabledselectcar] = useState("disabled");
  const [defaultselected,setselectedvalue]=useState({})
  const [disableddate, Setdisableddate] = useState("disabled");
  const [Fieldtoempty,setFieldtoempty]=useState(false)
  const [showDateTimeInputWithFrom, SetshowDateTimeInputFrom] = useState(false);
  const [showDateTimeInputWithTo, SetshowDateTimeInputTo] = useState(false);
  const [ShowColorDisabledForDate, SetShowColorDisabledForDate] = useState(true);
  const [showCarWithDate, SetshowCarWithDate] = useState(false);
  const [showCarWithTime, SetshowCarWithTime] = useState(false);
  const [showCar, SetshowCar] = useState(false);
  const [disabletime, Setdisabletime] = useState("disabled");
  const [modalShow, setModalShow] = useState(false);
  const [IsShow, setIsshow] = useState(false);
  const [autocompleteFrom, setAutocompleteFrom] = useState("");
  const [autoCompleteTo, setAutCompleteTo] = useState("");
  const [fromlocation, setFromlocation] = useState({});
  const [tolocation, setTolocation] = useState({});
  const [fromlocationname, setfromlocationname] = useState("");
  const [tolocationname, settolocationname] = useState("");
  const [eventcontainer,seteventcontainer]=useState("")
  const [carname, setCarname] = useState("");
  const [carid, setCarid] = useState("");
  const [bookdate, setDate] = useState("");
  const [booktime, setTime] = useState("");
  const [passenger, setPassenger] = useState("");
  const [luggage, setLuggage] = useState("");
  const [bookme, setBookme] = useState({});
  const [tooltipobj,setTooltipObj]=useState({})
  const onloadFromHandler = (autocompletefrom) => {
    setAutocompleteFrom(autocompletefrom);
  };
 
    //tooltip
    const renderTooltip = (props) => (
       <Tooltip
        arrowProps={{
          style: {
            backgroundColor: "#8f5e25",
          },
        }}
        id="button-tooltip"
        {...props}
      >
        Please Fill From & To Field
      </Tooltip>
    );

  const onloadToHandler = (autocompleteto) => {
    setAutCompleteTo(autocompleteto);
  };
  //Controle Car dropdown & date & time field onchange From Input
  const OnchangeFromPlaceHandler = (e) => {
    e.preventDefault()
    if (e.target.value == "") {
      setselectedvalue({selected:true})
      SetshowDateTimeInputFrom(false);
    } else {
      setselectedvalue({})
      SetshowDateTimeInputFrom(true);
    }
  };
  //Select From Place
  const SelectedFromPlaceHandler = () => {
    const fromPlace = autocompleteFrom.getPlace();
    if (fromPlace) {
      setfromlocationname(fromPlace.formatted_address);
      const { lat, lng } = fromPlace?.geometry.location;
      const latvalue = lat();
      const lngvalue = lng();
      const origin = {
        lat: latvalue,
        lng: lngvalue,
      };
      setFromlocation(origin);
    } else {
      setFromlocation({});
    }
  };
  //Select To place
  const SelectedToPlaceHandler = () => {
    const placeTo = autoCompleteTo.getPlace();
    if (placeTo) {
      settolocationname(placeTo.formatted_address);
      const { lat, lng } = placeTo?.geometry.location;
      const latvalue = lat();
      const lngvalue = lng();
      const destination = {
        lat: latvalue,
        lng: lngvalue,
      };
      setTolocation(destination);
    } else {
      setTolocation({});
    }
  };
  //Controle Car dropdown onchange To Input
  const OnchangeToPlaceHandler = (e) => {
    e.preventDefault()
    if (e.target.value == "") {
      setselectedvalue({selected:true})
      SetshowDateTimeInputTo(false);
    } else {
      SetshowDateTimeInputTo(true);
      setselectedvalue({})

    }

    
  };

  const SelectedDateHandler = (date) => {
    setDate(date);
    SetshowCarWithDate(true)
  };
  const SelectedTimeHandler = (date) => {
    const hours=new Date(date).getHours()
    const minutes=new Date(date).getMinutes()
    const currenttime=`${hours}:${minutes}`
    console.log(currenttime)
    setTime(date);
    SetshowCarWithTime(true)

  };
  //show date and time on
  useEffect(() => {
    if (
      showDateTimeInputWithFrom === true &&
      showDateTimeInputWithTo === true
    ) {
      Setdisabletime("");
      Setdisableddate("");
      setgetQuotbtnenabled("");
      SetShowColorDisabledForDate(false)
      setTooltipObj({
          show:false
        })
      
    } else {
      setTooltipObj({})
      Setdisabletime("disabled");
      Setdisableddate("disabled");
      setgetQuotbtnenabled("disabled");
      SetShowColorDisabledForDate(true)
      
      
    }
    if (showCarWithTime === true && showCarWithDate === true && showDateTimeInputWithFrom===true && showDateTimeInputWithTo) {
      Setdisabledselectcar("");
    } else {
      Setdisabledselectcar("disabled");
      setgetQuotbtnenabled("disabled");
    }
  }, [
    fromlocation,
    tolocation,
    showDateTimeInputWithFrom,
    showDateTimeInputWithTo,
    showCarWithTime,
    showCarWithDate

  ]);

  // Get Cars Data
  const GetCars = async () => {
    const url = BASE_URL + "/car/allrecord";
    const response = await fetch(url);
    const Resultdata = await response.json();
    const { data } = Resultdata;
    if (data) {
      setCars(data);
    } else {
      setCars([]);
    }
  };
  useEffect(() => {
    console.log(BASE_URL);
    GetCars();
  }, []);

  //Car Select handler
  const onCarSelectHandler = (e) => {
 
    e.preventDefault()
    const car = cars?.find((el) => {
      return el._id == e.target.value;
    });
    setCarname(car?.car_name);
    setPassenger(car?.no_of_passengers);
    setLuggage(car?.allowed_buggage);
    setCarid(car?._id);
    //SetDistanceMatrix Fileds Origin and Destination
    props.onDirectionHandler(fromlocation, tolocation, car.per_mile_rate);
    //enable button
    setgetQuotbtnenabled("");
    setFieldtoempty(false)
  };

  //Time Handler
  const timeHandler = (e) => {
    setTime(e.target.value);
  };

  //Submit Book Now Info
  const submitFormHandler = (e) => {
    e.preventDefault();
    //show model
    setModalShow(true)
    seteventcontainer(e)
    setBookme({
      from: fromlocationname,
      to: tolocationname,
      bookdate: bookdate,
      booktime: booktime,
      car: carid,
      passenger: passenger,
      luggage: luggage,
      distance: props.distance,
      duration: props.duration,
    });

  };
  //onClick Date handler
  const onDateClickHandler=()=>{
    console.log('dateclicked')
  }
  //formresthandler
  const formresthandler=()=>{
    console.log('reset form')
    eventcontainer.target.reset()
   //clean fields
    setDate('')
    setTime('')
    setPassenger('')
    setLuggage('')
    setFieldtoempty(true)
    //disadbled all fields
    Setdisabletime("disabled");
    Setdisableddate("disabled");
    setgetQuotbtnenabled("disabled");
    SetShowColorDisabledForDate(true)
    Setdisabledselectcar("disabled");
  }

  return (
    <Fragment>
      <Form onSubmit={submitFormHandler}>
        <Row className="mb-3">
        {IsshowMessageForm && <MessagesInfo/>}

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
                    <LoadScript
                      googleMapsApiKey={apiKey}
                      libraries={["places"]}
                    >
                      <Autocomplete
                        onLoad={onloadFromHandler}
                        onPlaceChanged={SelectedFromPlaceHandler}
                      
                      
                      >
                        <>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <input
                              type="text"
                              color="#DAC683"
                              name="from"
                    
                              required
                              onChange={OnchangeFromPlaceHandler}
                              className="form-control input-from__input shadow-none"
                              placeholder="Address, airport, hotel"
                            />
                          </div>
                        </>
                      </Autocomplete>
                    </LoadScript>
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
                    <LoadScript
                      googleMapsApiKey={apiKey}
                      libraries={["places"]}
                    >
                      <Autocomplete
                        onLoad={onloadToHandler}
                        onPlaceChanged={SelectedToPlaceHandler}
                      >
                        <>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <input
                              type="text"
                              color="#DAC683"
                              required
                              onChange={OnchangeToPlaceHandler}
                              className="form-control input-from__input shadow-none"
                              placeholder="Address, airport, hotel"
                            />
                          </div>
                        </>
                      </Autocomplete>
                    </LoadScript>
                  </Col>
                </Row>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={6} xs={12}>
            {/* Add tooltip message */}
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
              {...tooltipobj}

            >
            <Form.Group controlId="formGridCity" className="mb-3">
              <div className="input-from">
                <Row className="row align-items-center">
                  <Col lg={2} xs={1}>
                    <span>
                      <FaCalendar color="#9B8974" size={20} />
                    </span>
                  </Col>
                  <Col lg={10} xs={11}>
                    <Form.Label className={`input-from__label ${ShowColorDisabledForDate ? 'color-disabled':''}`}>
                      Choose Date
                    </Form.Label>

                    <DatePicker
                      className={`input-from__input input-from__input-date shadow-none ${ShowColorDisabledForDate ? 'color-disabled-pleaceholder':''}`}
                      placeholderText="Select Date"
                      selected={bookdate}
                      disabled={disableddate}
                      minDate={new Date()}
                      required
                      onclick={onDateClickHandler}
                      onChange={SelectedDateHandler}
                    />

                  </Col>
                </Row>
              </div>
            </Form.Group>
            </OverlayTrigger>
            
           
          </Col>
          <Col lg={6} md={6} xs={12} className="mb--20">
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
              {...tooltipobj}
            >

            <Form.Group controlId="formGridState">
              <div className="input-from input-from__num-of-hour">
                <Row className="row align-items-center">
                  <Col lg={2} xs={1}>
                    <span>
                      <FaClock color="#9B8974" size={20} />
                    </span>
                  </Col>
                  <Col lg={10} xs={11}>
                    <Form.Label className={`input-from__label ${ShowColorDisabledForDate ? 'color-disabled':''}`}>
                      Select Hours
                    </Form.Label>
                    <DatePicker
                      className={`input-from__input input-from__input-date shadow-none ${ShowColorDisabledForDate ? 'color-disabled-pleaceholder':''}`}
                      placeholderText="Select Time"
                      showTimeSelectOnly
                      showTimeSelect
                      selected={booktime}
                      required
                      disabled={disabletime}
                      onChange={SelectedTimeHandler}
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </Col>
                </Row>
              </div>
            </Form.Group>
            </OverlayTrigger>

          </Col>
        </Row>
        <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
              {...tooltipobj}

            >
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <div className="input-from">
            <Row className="row align-items-center">
              <Col lg={1} xs={1}>
                <span>
                  <FaCar color="#9B8974" size={20} />
                </span>
              </Col>
              <Col lg={11} xs={11}>
                <Form.Label className={`input-from__label ${ShowColorDisabledForDate ? 'color-disabled':''}`}>
                  Select Vehicle
                </Form.Label>
                <Form.Select
                  onChange={onCarSelectHandler}
                  required
                  disabled={disabledselectcar}
                  className={`input-from__input input-from__input-hours shadow-none  ${ShowColorDisabledForDate ? 'color-disabled':''}`}
                  aria-label="Default select example"
                >
                  <option value="" {...defaultselected}>Select Vehicle</option>
                  {cars.map((el) => {
                    return <option value={el._id}>{el.car_name}</option>;
                  })}
                </Form.Select>
              </Col>
            </Row>
          </div>
        </Form.Group>
        </OverlayTrigger>
        {/* SHOW Or HIDE Passengers and Luggage */}
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
                    <Form.Label className={`input-from__label ${ShowColorDisabledForDate ? 'color-disabled':''}`}>
                      Allowed Passengers
                    </Form.Label>
                    <Form.Control
                      value={passenger}
                      type="text"
                      required
                      disabled={disabledselectcar}
                      className={`input-from__input shadow-none ${ShowColorDisabledForDate ? 'color-disabled-pleaceholder':''}`}
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
                    <Form.Label className={`input-from__label ${ShowColorDisabledForDate ? 'color-disabled':''}`}>
                      Allowed Luggage
                    </Form.Label>
                    <Form.Control
                      value={luggage}
                      type="text"
                      required
                      disabled={disabledselectcar}
                      className={`input-from__input shadow-none ${ShowColorDisabledForDate ? 'color-disabled-pleaceholder':''}`}
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
                    <Form.Label className={`input-from__label ${ShowColorDisabledForDate ? 'color-disabled':''}`}>
                      Distance
                    </Form.Label>
                    <Form.Control
                      
                      value={Fieldtoempty ?'':props.distance}
                      type="text"
                      required
                      disabled={disabledselectcar}
                      className={`input-from__input shadow-none ${ShowColorDisabledForDate ? 'color-disabled-pleaceholder':''}`}
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
                    <Form.Label className={`input-from__label ${ShowColorDisabledForDate ? 'color-disabled':''}`}>
                      Duration
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      disabled={disabledselectcar}
                      value={Fieldtoempty ? '':props.duration}
                      className={`input-from__input shadow-none  input-from__input-date ${ShowColorDisabledForDate ? 'color-disabled-pleaceholder':''}`}
                      placeholder="Duration"
                    />
                  </Col>
                </Row>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Col lg={8} md={8} xs={12} className="mb-3">
        
            <Form.Group controlId="formGridCity">
              <div className="input-from">
                <Row className="row align-items-center">
                  <Col lg={2} xs={1}>
                    <span>
                      <MdPaid color="#9B8974" size={20} />
                    </span>
                  </Col>
                  <Col lg={10} xs={11}>
                    <Form.Label className={`input-from__label ${ShowColorDisabledForDate ? 'color-disabled':''}`}>Price</Form.Label>
                    <Form.Control
                      disabled={disabledselectcar}
                      value={`$ ${ Fieldtoempty ?'':props.totalprice}`}
                      type="text"
                      required
                      className={`input-from__input shadow-none  input-from__input-date ${ShowColorDisabledForDate ? 'color-disabled':''}`}
                      placeholder="Price"
                    />
                  </Col>
                </Row>
              </div>
            </Form.Group>
          </Col>
        </Row>
        {/* SHOW Or HIDE Passengers and Luggage End*/}
        <button
          variant="primary"
          className="btn-block section-getquote__form-btn"
          type="submit"
        >
          GET A QUOTE
        </button>
      </Form>
      <MyVerticallyCenteredModal
        show={modalShow}
        onModalShow={setModalShow}
        fare={props.totalprice}
        onHide={() => setModalShow(false)}
        bookeddata={bookme}
        formreset={formresthandler}
      />
    </Fragment>
  );
}

export default PointGetQuoteForm;
