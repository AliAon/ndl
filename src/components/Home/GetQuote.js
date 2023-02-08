import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GetQuoteForm from "./GetQuoteForm";

const GetQuote = () => {
  return (
    <Row className="section-getquote gy-0 gx-0 align-items-center">
        <Col lg={7}>
            <Card className="section-getquote__card">
                <h4 className="section-getquote__title">GET A QUOTE</h4>
                <GetQuoteForm/>
            </Card>
        </Col>
        <Col lg={5}>
        <img src="./images/getaquotecar.png" className="section-getquote__img"/>
        </Col>
    </Row>
  );
};
export default GetQuote;
