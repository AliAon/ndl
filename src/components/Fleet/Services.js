import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import SectionTitle from "../../common/SectionTitle";
import ImageLeftService from "./ImageLeftService";
const Services = () => {
  return (
    <Fragment>
      <section className="section-services">
        <SectionTitle
          title="We’re here to help 24x7"
          align="center"
          subtitle="Our Services"
        />
        <ImageLeftService
          imgname="Group 7.png"
          title="
        Get verified driving schools and instructors near you
        "
          description="
        Find the best driving schools and instructors in the city to teach you in the best possible ways.
        "
        />
        <Row className="align-items-center">
          <Col lg={7}>
            <div className="section-services__detail pl--50">
              <h5 className="section-services_title">
                Get verified driving schools and instructors near you
              </h5>
              <p className="section-services_des">
                Find the best driving schools and instructors in the city to
                teach you in the best possible ways.
              </p>
              <button className="section-services_btn">Register Now</button>
            </div>
          </Col>
          <Col lg={5}>
            <img src="./images/Group 7.png" className="w-100" />
          </Col>
        </Row>
        <ImageLeftService
          imgname="Group 7 (1).png"
          title="
        Quality course work as per the MV rules
        "
          description="
        At drively, find a fusion of MV rules and supervised learning curated particularly for the greatest drivers on Indian roads
        "
        />

        <Row className="align-items-center">
          <Col lg={7}>
            <div className="section-services__detail pl--50">
              <h5 className="section-services_title">
                Get verified driving schools and instructors near you
              </h5>
              <p className="section-services_des">
                Find the best driving schools and instructors in the city to
                teach you in the best possible ways.
              </p>
              <button className="section-services_btn">Register Now</button>
            </div>
          </Col>
          <Col lg={5}>
            <img src="./images/Group 7.png" className="w-100" />
          </Col>
        </Row>

        <ImageLeftService
          imgname="Group 7 (2).png"
          title="
        Personalised learning"
          description="
        Manage your lessons like never before. Get personalised learning at your doorstops and fall in love with your mental horse.              </p>
        "
        />
      </section>
    </Fragment>
  );
};
export default Services;
