import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../../common/SectionTitle";
import ImageLeftService from "./ImageLeftService";
import ImageRightService from "./ImageRightService";
const Services = () => {
  return (
    <Fragment>
      <section className="section-services">
        <SectionTitle
          title="We’re here to help 24x7"
          align="center"
          subtitle="Our Services"
        />
        <Container>
          <ImageLeftService
            imgname="Group 7.png"
            title="Get verified driving schools and instructors near you"
            description="Find the best driving schools and instructors in the city to teach you in the best possible ways."
          />
        </Container>

         <Container fluid className="image-right-service">
          <Container>
            <ImageRightService
              title="Get verified driving schools and instructors near you"
              description="Find the best driving schools and instructors in the city to
        teach you in the best possible ways."
              imgname="Group 7.png"
            />
          </Container>
        </Container>
        <Container>
          <ImageLeftService
            imgname="Group 7 (1).png"
            title="
        Quality course work as per the MV rules
        "
            description="
        At drively, find a fusion of MV rules and supervised learning curated particularly for the greatest drivers on Indian roads
        "
          />
        </Container>
        <Container fluid className="image-right-service">
          <Container>
            <ImageRightService
              title="Get verified driving schools and instructors near you"
              description="Find the best driving schools and instructors in the city to
        teach you in the best possible ways."
              imgname="Group 7.png"
            />
          </Container>
        </Container>

        <Container>
          <ImageLeftService
            imgname="Group 7 (2).png"
            title="
        Personalised learning"
            description="
        Manage your lessons like never before. Get personalised learning at your doorstops and fall in love with your mental horse.              </p>
        "
          />
        </Container> 
      </section>
    </Fragment>
  );
};
export default Services;
