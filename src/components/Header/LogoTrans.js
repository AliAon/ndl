import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const LogoTrans=()=>{
    return(
        <div className="logo-img">
            <Link to="/">
            <img src="./images/ndl-trans.png" className="w-100"/>
            </Link>
        </div>
    )
}
export default LogoTrans