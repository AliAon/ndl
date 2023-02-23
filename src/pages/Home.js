import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import HeaderMobile from "../common/HeaderMobile";
import BookNow from "../components/Home/BookNow";
import CtaOne from "../components/Home/CtaOne";
import ExocticCarRental from "../components/Home/ExocticCarRental";
import ExtendYouShop from "../components/Home/ExtendYouShop";
import PointToPoint from "../components/Home/PointToPoint";
import Hero from "../components/Home/Hero";
import Hourly from "../components/Home/Hourly";
import ProductTabs from "../components/Home/ProductTabs";
import HourlyGetQuoteForm from "../components/Home/HourlyGetQuoteForm";
import BackToTopBtn from "../common/BackToTopBtn";
const Home = () => {
  return (
    <Fragment>
      <HeaderMobile />
      <Header />
      <main>
        <Container>
          <Hero imagename="Range-Rover 1.png" />
          {/* <BookNow /> */}
        </Container>
        <div className="getquotebg pt--40 pb--40">
          <Container>
            <Tabs
              defaultActiveKey="home"
              id="justify-tab-example"              
            >
              <Tab eventKey="home" title="PONT TO POINT">
                <PointToPoint />
              </Tab>
              <Tab eventKey="profile" title="HOURLY">
              <Hourly />
              </Tab>
            </Tabs>
          </Container>
        </div>
        <ExocticCarRental />
        <ExtendYouShop />
        <ProductTabs />
        <CtaOne />
        <BackToTopBtn/>
      </main>
      <Footer />
    </Fragment>
  );
};
export default Home;
