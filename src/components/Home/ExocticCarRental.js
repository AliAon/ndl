import { Container } from "react-bootstrap";
import SectionTitle from "../../common/SectionTitle";
import ProductGridOne from "./ProductGridOne";

const ExocticCarRental = () => {
  return (
    <Container>
        <SectionTitle first="Exotic" title="Car Rental" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl feugiat turpis aliquet nisi. In quam ullamcorper nulla congue rutrum nulla tellus eu enim. Arcu quam volutpat nisl sed nec magna."
        align="center"
        width={6}
        />
                <ProductGridOne/>

    </Container>
      );
};
export default ExocticCarRental;
