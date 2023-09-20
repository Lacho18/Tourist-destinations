import "./LandMarkStyle.css";

export default function LandMarkComponent(props) {

    return(
        <div className="one-landmark">
            <img src={props.landmarkImage} />
            <label id="landmarkName">{props.name}</label>
            <div className="landmark-info">
                <p>{props.shortInfo}</p>
                <p>For more information click <a href={props.link}>here</a></p>
            </div>
        </div>
    );
} 