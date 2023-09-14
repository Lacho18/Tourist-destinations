import "./DestinationStyle.css";
import "./DestinationStyle2.css";
import ClickAnywhereListener from "./ClickListener";

let textShown = false; 

export default function DestinationStructure(props) {
    let infoDiv;

    function summaryHandle(key) {
        let object = document.getElementById(key + "summary");
        let divOfInfo = document.getElementById("infoDiv"+key);

        if(!textShown) {
            textShown = true;
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

    function mouseOverHandle(key) {
        let rootDiv = document.getElementById('rootDiv'+key);
        rootDiv.classList.remove('structureRoot');
        rootDiv.classList.add('onDivSelection');
    }

    function mouseLeaveHandle(key) {
        let rootDiv = document.getElementById('rootDiv'+key);
        rootDiv.classList.remove('onDivSelection');
        rootDiv.classList.add('structureRoot');
    }

    let shortInfo = props.information.slice(0, 25);
    shortInfo += "....";

    return(
        //<ClickAnywhereListener idOfDiv={props.id} onMouseOverDiv={() => {mouseOverHandle(props.id);}}>
        <div className="structureRoot" id={"rootDiv"+props.id} onMouseEnter={() => {mouseOverHandle(props.id);}} onMouseLeave={() => {mouseLeaveHandle(props.id);}}>
            <div className="image-div">
                <img src={props.image} />
            </div>
            <div className="description">
                <p>Country : <span>{props.country}</span></p>
                <p>Town : <span>{props.town}</span></p>
            </div>
            <details>
                <summary onClick={() =>  {summaryHandle(props.id);}} id={props.id + "summary"}>{shortInfo}</summary>
                <div id={"infoDiv" + props.id}  className="infoDiv">
                    <p id="infoText">{props.information}</p>
                </div>
            </details>
        </div>
        //</ClickAnywhereListener>
    );
}