import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const LogoTrans=()=>{
    return(
        <div className="logo-img">
            <Link to="/">
            <img src="./images/ndl-trans.png" className="logo-trans__img"/>
            </Link>
        </div>
    )
}
export default LogoTrans