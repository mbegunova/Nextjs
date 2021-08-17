import {Fragment} from "react";
import infoElements from "../../constants/copyright.js"
import Element from "../element/element";
import Bonus from "../bonus/bonus";


export default function Info() {
    return(
        <div className="game__info info">
            {elementsList()}
            <Bonus/>
        </div>
    )

    function elementsList(){
            infoElements.map(({text, value}, index) => {
                return(
                    <Element text={text} value={value} key={index}/>
                )
            })
    }
}