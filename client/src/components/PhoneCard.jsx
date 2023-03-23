

export default function PhoneCard({ phone, handlerDetail }) {
    const PHOTO_PATH = "../../public/images/"
    console.log(PHOTO_PATH + phone.imageFileName)

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={PHOTO_PATH + phone.imageFileName} className="card-img-top" alt={"imagen of" + phone.imageFileName }/>
                <div className="card-body">
                    <h3 className="card-title">{phone.name} - {phone.color}</h3>
                    <p className="card-text">{phone.manufacturer}</p>
                    <p className="card-text">{phone.screen}</p>
                    <p className="card-text">{phone.processor} - {phone.ram}</p>
                    <p className="card-text">{phone.description}</p>
                    <h4 className="card-text">{phone.price}</h4>
                    <p className="card-text btn btn-info" onClick={handlerDetail}>Less info</p>
                </div>
            </div>
        </>
    )
};