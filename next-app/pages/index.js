import Main from "../components/main/main";
import Game from "../components/game/game";
import Tutorial from "../components/tutorial/tutorial";
import {useState} from "react";
import Counter from "../components/counter/counter";
import Statistics from "../components/statistics/statistics";
import {stat, result} from "../constants/statistics";
import {fromStatToResult} from "../utils/statHelper.js";

export default function Home() {
    const [state, setState] = useState("tutorial");
    const GAME_WRAPPER = "game-wrapper";
    const [time, setTime] = useState(3);
    const [isReset, setIsReset] = useState(false);

    return (
        <div className={GAME_WRAPPER}>
            {
                CurrentComponent()
                /*
                <Game className={`${GAME_WRAPPER}__game`} onAction={() => {
                    setState("statistics")
                }}/>
                */
                //CurrentComponent()
            }
        </div>
    )

    function CurrentComponent() {

        switch (state) {
            case "tutorial": {
                return (
                    <Main className={`${GAME_WRAPPER}__main`} isTutorial={true} onAction={() => {
                        setState("game-tutorial")
                    }}>
                        <Tutorial className={`${GAME_WRAPPER}__tutorial`}/>
                    </Main>
                )
            }
            case "game-tutorial": {
                return (
                    <Game className={`${GAME_WRAPPER}__game`} modifier={"tutorial"} onAction={() => {
                        setState("counter")
                    }}>
                    </Game>
                )
            }
            case "counter": {
                return (
                    <Counter className={`${GAME_WRAPPER}__counter`} value={time}
                             afterReset={() => {
                                 setIsReset(!isReset)
                             }} isReset={isReset} onAction={() => {
                        setState("game")
                    }}/>
                )
            }
            case "game": {
                return (
                    <Game className={`${GAME_WRAPPER}__game`} onAction={() => {
                        setState("statistics")
                    }}>
                    </Game>
                )
            }
            case "statistics": {
                return (
                    <Main className={`${GAME_WRAPPER}__main ${GAME_WRAPPER}__main_result main`} isTutorial={false}
                          onAction={() => {
                              setState("tutorial")
                          }} modifier={"result"}>
                        <Statistics className={`${GAME_WRAPPER}__statistics`} statList={stat}
                                    resultObj={fromStatToResult(result)}/>
                    </Main>
                )
            }
        }
    }
}

