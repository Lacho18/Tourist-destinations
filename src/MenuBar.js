import Europe from "./Images/Europe11.png";
import Asia from "./Images/Asia1.png";
import Australia from "./Images/Australia1.png";
import Africa from "./Images/Africa.png";
import World from "./Images/World1.png";
import SwipeIcon from "./Images/Swipe-icon11.png";

import { useEffect } from "react";

export default function MenuBar(props) {
    let animationIsGoing = false;
    let menuBarShown = false;

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

    function menuAppearenceFunction() {
        let menuDiv = document.getElementsByClassName('menu-root');
        let imageOfMenu = document.getElementById('swipeMenuId');
        if(menuDiv[0].style.display === 'none') {
            menuDiv[0].style.display = 'block';
        }
        if(!menuBarShown) {
            imageOfMenu.style.left = "1%";
            menuDiv[0].style.width = '5%';
            menuDiv[0].classList.add('menu-root-onApearense');
            menuDiv[0].classList.remove('menu-root-onDisapearense');  
            menuBarShown = true;  
        }
        else {
            menuDiv[0].style.width = '0%';
            imageOfMenu.style.left = "-4%";
            menuDiv[0].classList.add('menu-root-onDisapearense');
            menuDiv[0].classList.remove('menu-root-onApearense');  
            menuBarShown = false;  
        }
    }

    useEffect(() => {
        let menuDiv = document.getElementsByClassName('menu-root');
        menuDiv[0].style.display = 'none';
    }, [])

    return(
        <div>
            <img src={SwipeIcon} id="swipeMenuId" onClick={menuAppearenceFunction}/>
            
        <div className="menu-root">
            
            
            <button id="World" onClick={() => {worldHandle();}} onMouseOver={spinWorld}><img src={World} /></button>

                <ul>
    
                    <button id="Europe" onClick={() => {menuButtonHandle("Europe");}}><img src={Europe} /></button>
                    
                   
                    <button id="Asia" onClick={() => {menuButtonHandle("Asia");}}><img src={Asia} /></button>
                   
                   
                    <button id="Africa" onClick={() => {menuButtonHandle("Africa");}}><img src={Africa} /></button>
                    
                   
                    <button id="Australia" onClick={() => {menuButtonHandle("Australia");}}><img src={Australia} /></button>
                   
                </ul>
        </div>
        </div>
    );
}