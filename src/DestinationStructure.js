import "./DestinationStyle.css";
import {useEffect} from "react";

export default function DestinationStructure(props) {
    let infoDiv;

    /*useEffect(() => {
        infoDiv = document.getElementById("infoDiv");
        infoDiv.addEventListener("mouseover", () => {
            console.log(props.id);
        });
    })*/

    function mouseHandle() {
        console.log(props.id);
        infoDiv = document.getElementById("infoDiv");
        infoDiv.classList.add('cleareText');
        infoDiv.classList.remove('destination-information');
    }

    return(
        <div className="structureRoot">
            <div className="image-div">
                <img src={props.image} />
            </div>
            <div className="description">
                <p>Country : {props.country}</p>
                <p>Town : {props.town}</p>
            </div>
            <div className="destination-information" id="infoDiv" onMouseOver={mouseHandle}>
                <p>{props.information}</p>
            </div>
        </div>
    );
}