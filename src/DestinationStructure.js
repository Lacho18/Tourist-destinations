import "./DestinationStyle.css";
import {useEffect} from "react";

let textShown = false; 

export default function DestinationStructure(props) {
    let infoDiv;

    function mouseHandle() {
        console.log(props.id);
        infoDiv = document.getElementById("infoDiv");
        infoDiv.classList.add('cleareText');
        infoDiv.classList.remove('destination-information');
    }

    function summaryHandle(key) {
        let object = document.getElementById(key + "summary");
        let divOfInfo = document.getElementById("infoDiv"+key);

        if(!textShown) {
            textShown = true;
            props.onTextShown(textShown);
            object.innerHTML = "";
            object.style.color = "black";
            divOfInfo.classList.add("divAppeare");
        }
        else {
            object.style.color = "rgba(255, 255, 255, 0.2)";
            object.innerHTML = shortInfo;
            divOfInfo.classList.remove("divAppeare");
            textShown = false;
        }
    }

    /*function textInfoHideAgain(key) {
        let object = document.getElementById(key + "summary");
        let divOfInfo = document.getElementById("infoDiv"+key);
        object.style.visibility = "visible";
        divOfInfo.classList.remove("divAppeare");
    }*/

    let shortInfo = props.information.slice(0, 25);
    shortInfo += "....";

    return(
        <div className="structureRoot">
            <div className="image-div">
                <img src={props.image} />
            </div>
            <div className="description">
                <p>Country : {props.country}</p>
                <p>Town : {props.town}</p>
            </div>
            <details>
                <summary onClick={() =>  {summaryHandle(props.id);}} id={props.id + "summary"}>{shortInfo}</summary>
                <div id={"infoDiv" + props.id}  className="infoDiv">
                    <p id="infoText">{props.information}</p>
                </div>
            </details>
        </div>
    );
}