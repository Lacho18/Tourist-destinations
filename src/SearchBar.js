import './searchBarStyle.css';
import magnifyingGlass from './Images/magnifyingGlass.png';

export default function SearchBar(props) {

    function textHandle(event) {
        console.log(event.target.value);
        props.getSearchText(event.target.value);
    }

    return(
        <header>
            <div className="search-bar">
                <input type="text" id='textField' onChange={textHandle}/>
                <img id="buttonOfTextInput" src={magnifyingGlass}/>
            </div>
        </header>
    );
}