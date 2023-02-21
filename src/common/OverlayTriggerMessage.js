import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function OverlayTriggerMessage() {
  const renderTooltip = (props) => (
    <Tooltip
      arrowProps={{
        style: {
          backgroundColor: "#8f5e25",
        },
      }}
      id="button-tooltip"
      {...props}
    >
      Please Fill From & To Field
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="success">Hover me to see</Button>
    </OverlayTrigger>
  );
}

export default OverlayTriggerMessage;
