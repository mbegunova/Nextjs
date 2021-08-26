import {infoElements} from "../../constants/constants.js"
import Element from "../element/element";
import Bonus from "../bonus/bonus";
import {useState} from "react";
import {fromElemToInfo} from "../../utils/statHelper";


export default function Info({className="", isActive, infoObject}) {
    return (
        isActive ? <div className={`${className} info`}>
                {elementsList()}
                <Bonus className={"info__bonus"} bonus={infoObject[infoObject.length-1]}/>
            </div>
            : null
    )

    function elementsList() {
        return infoElements.items.map(({text, value}, index) => {
            return (
                <Element text={text} value={infoObject[index]} key={index}/>
            )
        })
    }
}