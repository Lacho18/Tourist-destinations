import Europe from "./Images/Europe11.png";
import Asia from "./Images/Asia1.png";
import Australia from "./Images/Australia1.png";
import Africa from "./Images/Africa.png";
import World from "./Images/World1.png";

export default function MenuBar(props) {
    let animationIsGoing = false;

    function menuButtonHandle(buttonId) {
        props.onMenuClickedButton(buttonId);
    }

    function spinWorld() {
        if(!animationIsGoing) {
            animationIsGoing = true;
            let world = document.getElementById('World');
            world.classList.add('spin-world');

            let interval = setInterval(() => {
                world.classList.remove('spin-world');
                animationIsGoing = false;
                clearInterval(interval);
            }, 10000);
        }
        
    }

    function worldHandle() {
        props.onWorldClicked();
    }

    return(
        <div className="menu-root">
            <button id="World" onClick={() => {worldHandle();}} onMouseOver={spinWorld}><img src={World} /></button>

            <ul>

                <button id="Europe" onClick={() => {menuButtonHandle("Europe");}}><img src={Europe} /></button>
                
               
                <button id="Asia" onClick={() => {menuButtonHandle("Asia");}}><img src={Asia} /></button>
               
               
                <button id="Africa" onClick={() => {menuButtonHandle("Africa");}}><img src={Africa} /></button>
                
               
                <button id="Australia" onClick={() => {menuButtonHandle("Australia");}}><img src={Australia} /></button>
               
            </ul>
        </div>
    );
}