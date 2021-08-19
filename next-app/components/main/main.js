import {Fragment, useState} from "react";
import {titles} from "../../constants/constants.js";


export default function Main({className, children, modifier, onAction, isTutorial}) {
    const {title: titleContent, subtitle: subtitleContent} = titles[isTutorial ? "tutorial" : "statistics"][0];
    const title = titleContent ? (<h3 className="main__popup-title">{titleContent}</h3>) : null;
    const subtitle = subtitleContent ? (<p className="main__popup-subtitle">{subtitleContent}</p>) : null;

    return (
        <div className={`main ${className ?? ""} ${modifier ? `main_${modifier}` : ""}`}>
            <div className="main__popup">
                <div className="main__popup-container">
                    {title}
                    {subtitle}
                </div>
            </div>
            {children}
            <button onClick={onAction} className="main__button">ДАЛЕЕ
            </button>
        </div>
    )
}