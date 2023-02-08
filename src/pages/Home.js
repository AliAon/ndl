import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderMobile from "../common/HeaderMobile";
import BookNow from "../components/Home/BookNow";
import CtaOne from "../components/Home/CtaOne";
import ExocticCarRental from "../components/Home/ExocticCarRental";
import ExtendYouShop from "../components/Home/ExtendYouShop";
import GetQuote from "../components/Home/GetQuote";
import Hero from "../components/Home/Hero";
import ProductTabs from "../components/Home/ProductTabs";
const Home = () => {
  return (
    <Fragment>
      <HeaderMobile/>
      <Header />
      <main>
        <Container>
          <Hero />
          {/* <BookNow /> */}
        </Container>
         <div className="getquotebg pt--40 pb--40">
          <Container>
            <GetQuote />
          </Container>
        </div>
       <ExocticCarRental />
         <ExtendYouShop />
        <ProductTabs />
         <CtaOne />
      </main>
      <Footer />
    </Fragment>
  );
};
export default Home;
