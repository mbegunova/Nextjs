import {infoElements} from "../../constants/constants.js"
import Element from "../element/element";
import Bonus from "../bonus/bonus";
import CountDownElement from "../element/countDownElement";


export default function Info({className = "", isActive, infoObject, timeIsOut}) {
    return (
        isActive ? <div className={`${className} info`}>
                <CountDownElement className={"info__element"} text={infoElements.timer.text}
                                  timeValue={60} timeIsOut={() => {
                    timeIsOut();
                }}/>
                {elementsList()}
                <Bonus className={"info__bonus"} bonus={infoObject[infoObject.length - 1]}/>
            </div>
            : null
    )

    function elementsList() {
        return infoElements.items.map(({text, value}, index) => {
            return (
                <Element className={"info__element"} text={text}
                         value={value.substring(0, value.length - 1) + infoObject[index]}
                         key={index}/>
            )
        })
    }
}