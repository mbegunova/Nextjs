import {infoElements} from "../../constants/constants.js"
import Element from "../element/element";
import Bonus from "../bonus/bonus";


export default function Info({className="", isTutorial}) {
    return (
        isTutorial ? null
        : <div className={`${className} info`}>
                {elementsList()}
                <Bonus/>
            </div>
    )

    function elementsList() {
        return infoElements.items.map(({text, value}, index) => {
            return (
                <Element text={text} value={value} key={index}/>
            )
        })
    }
}