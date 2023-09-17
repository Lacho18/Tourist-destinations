import "./HotelComponent.css";

export default function HotelComponent(props) {

    return(
        <div className="one-hotel">
            <img src={props.hotelImage} />
            <label>{props.name}</label> <a href = {props.link}> Click for more info </a>
        </div>
    );
}   