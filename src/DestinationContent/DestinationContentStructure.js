import "../DestinationContent/ContentStyle.css";
import BackArrow from "../Images/ContentImages/Buttons/Back-arrow.png";
import Galery from "../Images/ContentImages/Buttons/Galery.png";
import Hotel from "../Images/ContentImages/Buttons/Hotel.png";
import Landmarks from "../Images/ContentImages/Buttons/landmarks.png";
import CONTENT from "./DestinetionContent";

import HotelComponent from "./hotelComponent";

export default function DestinationContentStructure(props) {
    
    function backToMainMenu() {
        props.onBack();
    }

    return(
        <div className="content-root">
            <header>
                <p>{props.town}</p>
                <div className="content-buttons">
                    <button id="hotelSection"><img src={Hotel} /></button>
                    <button id="landmarks"><img src={Landmarks} /></button>
                    <button id="imageSection"><img src={Galery} /></button>
                    <button id="goBack"  onClick={backToMainMenu}><img src={BackArrow} /></button>
                </div>
            </header>
            <div className="info-and-image">
                <img src={props.image} />
                <p>Some info and large text.</p>
            </div>
            <div className="side-divs" id="hotelsDiv">
                <p className="side-divs-titels">Here are some of the most rated hotels in {props.town}</p>
                {CONTENT[props.id - 1].hotels.map(indexValue => {
                    return <HotelComponent {...indexValue}/>
                })}
            </div>
        </div>
    );
}