import {infoElements} from "../../constants/constants.js"
import Element from "../element/element";
import Bonus from "../bonus/bonus";
import {useState} from "react";


export default function Info({className="", isActive}) {
    const [seconds, setSeconds] = useState(isActive? 60 : null);

    return (
        isActive ? <div className={`${className} info`}>
                {elementsList()}
                <Bonus/>
            </div>
            : null
    )

    function elementsList() {
        return infoElements.items.map(({text, value}, index) => {
            return (
                <Element text={text} value={value} key={index}/>
            )
        })
    }
}