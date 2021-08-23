import {useState} from "react";
import Field from "../field/field.js";
import Info from "../info/info.js";

export default function Game({className, modifier, onAction}){
    const [isTutorial, setIsTutorial] = useState(false);
    startListen();
    return(
        <div className={`game ${className || ""} ${modifier? `game__${modifier}`: ""}`}>
        <Info isActive={isTutorial}/>
        <div className="game__task">
            <h2 className="game__task-text">Найдите указанное число:</h2>
            <span className="game__task-value"></span>
        </div>
        <Field className={"game__field"} checkHandler={resultHandler} onSelect={(number)=>{console.log('here')}} getValue={()=>{
            //document.querySelector(".game__task-value").textContent = value;
        }} onClick={clickHandler}/>
            {
                modifier? <div className={"game__to-continue"}>Нажите на экран, чтобы продолжить</div>: null
            }
        </div>
    )
    //TODO: бработка клика  - цепочка коллбэков
    function clickHandler(e) {
        debugger
        if(e.type !== "button") return;
        console.log("Go on");
    }
}

function resultHandler(value){
    //window.querySelector(".game__task-value").textContent = value;
}

function startListen() {
/*
    document.addEventListener('onclick', (e)=>{
        console.log(e.target);
    })
*/
}

