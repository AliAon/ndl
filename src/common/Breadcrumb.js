import { Col, Container, Row } from "react-bootstrap"
import {FaAngleRight} from "react-icons/fa"

const Breadcrumb=(props)=>{
    return(
        <div className="breadcrumb">
            <span className="breadcrumb-collectin">{props.previous}</span>
            <span><FaAngleRight color="#A7A7A7" size={15} className="breadcrumb__angle"/></span>
            <span className="breadcrumb-product">{props.name}</span>
        </div>
    )

}
export default Breadcrumb