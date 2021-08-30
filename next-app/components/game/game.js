import Field from "../field/field.js";
import Info from "../info/info.js";
import {toGameInfoData} from "../../utils/statHelper";
import {settings} from "../../constants/constants";
import {useEffect, useState} from "react";
import {rng} from "../../utils/rng";
import CSSTransition from "react-transition-group/CSSTransition";
import Brick from "../brick/brick";
import SwitchTransition from "react-transition-group/SwitchTransition";

export default function Game({
                                 className, modifier, onClick, level, isTutorial = false, color,
                                 onSelect, isDisappear, result, timeIsOut, allAnswers
                             }) {
    const [dataForGame, setDataForGame] = useState(toGameInfoData(level, settings));
    const [colorCurrent, setColor] = useState(color);
    const [isShow, setIsShow] = useState(!isTutorial);
    let timeout;

    const modes = ["out-in", "in-out"];
    const [mode, setMode] = useState("out-in");
    const [state, setState] = useState(true);


    useEffect(() => {
        if (isTutorial) return;
        setIsShow(true);
        timeout = setTimeout(() => {
            setIsShow(false);
        }, 500)
    }, [isTutorial])

    useEffect(() => {
        setDataForGame(toGameInfoData(level, settings));
        console.log("данные изменены")
        if (level < 3) return;
        setColor(settings.colors[rng.nextRange(0, settings.colors.length - 1)]);
    }, [allAnswers])


    return (
        <div
            className={`game ${className || ""} ${modifier ? `game__${modifier}` : ""} ${isDisappear ? "game_disappear" : ""}
            ${isShow ? "game_show" : ""}`}
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


            <SwitchTransition mode={mode}>
                <CSSTransition
                    key={state}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                    classNames="fade">

                    <Field wait={(isTutorial) ? 0 : 3000}
                           className={`game__field`} onSelect={(number) => {
                        setState(state => !state);
                        if (typeof onSelect === "function") onSelect(number, dataForGame.currentValue);

                    }}
                           dataForGame={dataForGame}
                    />
                </CSSTransition>
            </SwitchTransition>
            {modifier ? <div className={"game__to-continue"}>Нажите на экран, чтобы продолжить </div> : null}
        </div>
    )
}





