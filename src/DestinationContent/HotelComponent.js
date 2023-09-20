import "./HotelComponent.css";

export default function HotelComponent(props) {

    return(
        <div className="one-hotel">
            <img src={props.hotelImage} />
            <div className="hotel-info">
                <label>{props.name}</label>
                <p>Price per night : <span style={{color: "darkred", fontStyle: "italic"}}>{props.pricePerNight}</span></p>
                <a href = {props.link}> Click for more info </a>
            </div>
        </div>
    );
}   