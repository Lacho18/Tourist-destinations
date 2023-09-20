import "../DestinationContent/ContentStyle.css";
import BackArrow from "../Images/ContentImages/Buttons/Back-arrow.png";
import Galery from "../Images/ContentImages/Buttons/Galery.png";
import Hotel from "../Images/ContentImages/Buttons/Hotel.png";
import Landmarks from "../Images/ContentImages/Buttons/landmarks.png";
import CONTENT from "./DestinetionContent";

import HotelComponent from "./hotelComponent";
import LandMarkComponent from "./LandMarkComponent";

export default function DestinationContentStructure(props) {
    
    function backToMainMenu() {
        props.onBack();
    }

    function scrollTo(sectionID) {
        let section = document.getElementById(sectionID);

        section.scrollIntoView({behavior : 'smooth'});
    }

    return(
        <div className="content-root">
            <header>
                <p>{props.town}</p>
                <div className="content-buttons">
                    <button id="hotelSection" onClick={() => {scrollTo('hotelsDiv');}}><img src={Hotel} /></button>
                    <button id="landmarks" onClick={() => {scrollTo('landmarksDiv');}}><img src={Landmarks} /></button>
                    <button id="imageSection" onClick={() => {scrollTo('galery');}}><img src={Galery} /></button>
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
                <p className="side-divs-endText">For more hotels and information about them click <a href="https://www.tripadvisor.com/SmartDeals-g187791-Rome_Lazio-Hotel-Deals.html">here</a></p>
            </div>
            <div className="side-divs" id="landmarksDiv">
                <p className="side-divs-titels">Here are one of the best landmarks that you should see in {props.town}</p>
                {CONTENT[props.id - 1].landmarks.map(indexValue => {
                    return <LandMarkComponent {...indexValue}/>
                })}
                <p className="side-divs-endText">For more hotels and information about them click <a href="https://www.tripadvisor.com/SmartDeals-g187791-Rome_Lazio-Hotel-Deals.html">here</a></p>
            </div>
            <div  className="side-divs" id="galery">
                <p className="galeryTitle">Galery</p>
                {CONTENT[props.id - 1].imagesOfLandmarks.map(indexVaalue => {
                    return <img id="image-inside-gallery" src={indexVaalue} />
                })}
            </div>
        </div>
    );
}