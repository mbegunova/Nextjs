import Field from "../field/field.js";
import Info from "../info/info.js";
import {toGameInfoData} from "../../utils/statHelper";
import {settings} from "../../constants/constants";
import {useEffect, useState} from "react";
import {rng} from "../../utils/rng";

export default function Game({ className, modifier, onClick, level, isTutorial = false, color,
                                 onSelect, isDisappear, result
                             }) {
    const TIME = "00:00";
    const [dataForGame, setDataForGame] = useState(toGameInfoData(level, settings));
    const [colorCurrent, setColor] = useState(color);
    const [isShow, setIsShow] = useState(!isTutorial);

    useEffect(() => {
        if(isTutorial) return;
        setIsShow(true);
        setTimeout(() => {
            setIsShow(false);
        }, 900)
    }, [isTutorial])

    useEffect(() => {
        setDataForGame(toGameInfoData(level, settings));
        if (level < 3) return;
        setColor(settings.colors[rng.nextRange(0, settings.colors.length - 1)]);
    }, [level])


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
                                       infoObject={[TIME, level, result?.totalPoints, result.rightTogether]}/>}
            <div className="game__task">
                <h2 className="game__task-text">Найдите указанное число:</h2>
                <span className="game__task-value">{dataForGame.currentValue}</span>
            </div>
            <Field
                className={`game__field`} onSelect={(number) => {
                if (typeof onSelect === "function") onSelect(number, dataForGame.currentValue);
            }}
                dataForGame={dataForGame}
            />
            {modifier ? <div className={"game__to-continue"}>Нажите на экран, чтобы продолжить </div> : null}
        </div>
    )
}





