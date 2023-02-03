import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header"
import BookNow from "../components/Home/BookNow";
import Hero from "../components/Home/Hero";
const Home = () => {
  return (
    <Fragment>
      <Header/>
      <main>
        <Container>
          <Hero />
          <BookNow/>
        </Container>
      </main>
      <Footer/>
    </Fragment>
  );
};
export default Home;
