import { Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
const NewsletterForm = () => {
  return (
    <div className="seach-input">
      <Form>
        <InputGroup className="mt-3 newsletter__search-input">
          <Form.Control
            placeholder="Enter your email"
            aria-label="Enter your email"
            aria-describedby="basic-addon2"
          />
          <Button
            variant="outline-secondary"
            className="section__cta__news-letter__search__btn"
            id="button-addon2"
          >
            Join
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};
export default NewsletterForm;
