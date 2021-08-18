import {Fragment, useState} from "react";
import Tutorial from "../tutorial/tutorial.js";
import Statistics from "../statistics/statistics.js";
import {titles} from "../../constants/constants.js";


export default function Main({className, children, modifier, onAction}) {
    const [isTutorial, setIsTutorial] = useState(true);
    return (
        <div className={`main ${className ?? ""} ${modifier ? `main_${modifier}` : ""}`}>
            <div className="main__popup">
                <div className="main__popup-container">
                        isTutorial
                         ? <> <h2 className="main__popup-title">{titles.tutorial.title}</h2>
                            <h3 className="main__popup-subtitle">{titles.tutorial.subtitle}</h3></>
                        :<h2 className="main__popup-title">{titles.statistics.title}</h2>
                </div>
            </div>
            {children}
            <button onClick={onAction} className="main__button">ДАЛЕЕ
            </button>
        </div>
    )
}