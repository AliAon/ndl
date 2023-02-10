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
            imgname="car-jeep7.svg"
            title="Get verified driving schools and instructors near you"
            description="Find the best driving schools and instructors in the city to teach you in the best possible ways."
          />
        </Container>

         <Container fluid className="image-right-service">
          <Container>
            <ImageRightService
              title="Easy enrollment into programs"
              description="Few simple clicks bring you closer to a lifetime of amazing long drives and memories"
              imgname="Group 8.svg"
            />
          </Container>
        </Container>
        <Container>
          <ImageLeftService
            imgname="Group 7.svg"
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
              title="Assistance for the license process"
              description="Find the best expert advice to ace the license process. It’s time to forget the long queues for the love of speed(below 60)."
              imgname="Group 8 (1).svg"
            />
          </Container>
        </Container>

        <Container>
          <ImageLeftService
            imgname="Group 7 (1).svg"
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
