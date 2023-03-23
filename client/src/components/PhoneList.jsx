import { useState } from "react";
import PhoneCard from "./PhoneCard";


export default function PhoneList({phone}) {
    const [ showDetails, setShowDetails ] = useState(false)

    const handlerDetail = () => {
        setShowDetails(!showDetails)
    }

    return (
        <>
            {!showDetails && <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{phone.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{phone.manufacturer}</h6>
                    <p className="card-text">{phone.processor} - {phone.ram}</p>
                    <p className="card-link btn btn-primary" onClick={handlerDetail}>More info</p>
                </div>
            </div>}
            {showDetails && <PhoneCard phone={phone} handlerDetail={handlerDetail} />}
        </>
    )
}