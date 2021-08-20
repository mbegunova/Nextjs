import {useState} from "react";
import Field from "../field/field.js";
import Info from "../info/info.js";

export default function Game(){
    const [isTutorial, setIsTutorial] = useState(false);
    return(
        <div className={"game"}>
        <Info isActive={isTutorial}/>
        <div className="game__task">
            <h2 className="game__task-text">Найдите указанное число:</h2>
            <i className="game__task-value"></i>
        </div>
        <Field className={"game__field"}/>
        </div>
    )
}