import { useState } from "react";


function LightBulb(){
    const [bulbOn, setBulbon] = useState(true);
    return <div>
        <LightbulbState bulbOn = {bulbOn}/ >
        <ToggleLightBulb bulbOn={bulbOn} setBulbon = {setBulbon} / >
    </div>
    
}

function LightbulbState({bulbOn}){
    return <div>
    {bulbOn ? "Bulb On": "Bulb Off" }
    </div>
}

function ToggleLightBulb({bulbOn, setBulbon}){
    function toogle(){
        setBulbon(!bulbOn)
    }

    return <div>
        <button onClick={toogle}>Toogle The Bulb</button>
    </div>
}

export default LightBulb