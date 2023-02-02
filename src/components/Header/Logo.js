import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Logo=()=>{
    return(
        <div className="logo-img">
            <Link to="/">
            <img src="./images/ndl-logo.png"/>
            </Link>
        </div>
    )
}
export default Logo