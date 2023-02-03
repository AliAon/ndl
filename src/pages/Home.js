import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import BookNow from "../components/Home/BookNow";
import GetQuote from "../components/Home/GetQuote";
import Hero from "../components/Home/Hero";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Container>
          <Hero />
          <BookNow />
        </Container>
        <div className="getquotebg pt--40 pb--40">
          <Container>
            <GetQuote />
          </Container>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
export default Home;
