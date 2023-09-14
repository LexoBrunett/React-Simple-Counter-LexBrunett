//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { PropTypes } from "prop-types";

import "../styles/index.css";

function SimpleCounter(props){
    return(<div className="bigCounter">
        <div className="Card_container"><FontAwesomeIcon icon={faClock} /></div>
        <div className = "Card_container"> <div className="cuartodigito">{props.DigitFour  % 10}</div> </div>
        <div className = "Card_container"> <div className="tercerdigito">{props.DigitThree  % 100}</div> </div>
        <div className = "Card_container"> <div className="segundodigito">{props.DigitTwo  % 10}</div> </div>
        <div className = "Card_container"> <div className="primerdigito">{props.DigitOne  % 10}</div> </div>
    </div>);
}
SimpleCounter.prototype = {
    DigitFour: PropTypes.number,
    DigitThree: PropTypes.number,
    DigitTwo: PropTypes.number,
    DigitOne: PropTypes.number
}

let counter = 0;
setInterval (function(){
    const cuartodigito = Math.floor(counter/1000);
    const tercerdigito = Math.floor(counter/100);
    const segundodigito = Math.floor(counter/10);
    const primerdigito = Math.floor(counter/1);
    counter++;
    ReactDOM.render(
        <SimpleCounter DigitOne={primerdigito} DigitTwo={segundodigito} DigitThree={tercerdigito} DigitFour={cuartodigito} />,
        document.querySelector("#app")
    );


},1000);    
   