import Field from "../field/field.js";
import Info from "../info/info.js";
import {toGameInfoData} from "../../utils/statHelper";
import {settings, timeForSlideOutField} from "../../constants/constants";
import React, {useEffect, useRef, useState} from "react";
import {rng} from "../../utils/rng";
import CSSTransition from "react-transition-group/CSSTransition";

export default function Game({
                                 className, modifier, onClick, level, isTutorial = false, color,
                                 onSelect, result, timeIsOut, allAnswers
                             }) {
    const [dataForGame, setDataForGame] = useState(toGameInfoData(level, settings));
    const [colorCurrent, setColor] = useState(color);
    let timeout;
    const mode = "out-in";
    const [state, setState] = useState(false);
    const fieldRef = useRef();

    useEffect(()=>{
        setState(state => !state);
    }, [])


    useEffect(() => {
        setDataForGame(toGameInfoData(level, settings));
        console.log("данные изменены")
        if (level < 3) return;
        setColor(settings.colors[rng.nextRange(0, settings.colors.length - 1)]);
    }, [allAnswers])


    return (
        <div
            className={`game ${className || ""} ${modifier ? `game__${modifier}` : ""} `}
            style={{backgroundColor: colorCurrent}}
            onClick={() => {
                modifier ? onClick() : null
            }}
        >
            {isTutorial ? null
                : <Info className={"game__info"} isActive={!isTutorial}
                        timeIsOut={() => {
                            clearInterval(timeout);
                            timeIsOut();
                        }}
                        infoObject={[level, result?.totalPoints, result.rightTogether]}/>}
            <div className="game__task">
                <h2 className="game__task-text">Найдите указанное число:</h2>
                <span className="game__task-value">{dataForGame.currentValue}</span>
            </div>
                <CSSTransition in={state} timeout={timeForSlideOutField} nodeRef={fieldRef} classNames="fade">
                    <Field
                        className={`game__field`}  ref={fieldRef} onSelect={(number) => {
                        setState(state => !state);
                        if (typeof onSelect === "function") onSelect(number, dataForGame.currentValue);
                    }}
                        dataForGame={dataForGame}
                    />
                </CSSTransition>
            {modifier ? <div className={"game__to-continue"}>Нажите на экран, чтобы продолжить </div> : null}
        </div>
    )
}






