import Main from "../components/main/main";
import Game from "../components/game/game";
import Tutorial from "../components/tutorial/tutorial";
import {useState} from "react";
import Counter from "../components/counter/counter";
import Statistics from "../components/statistics/statistics";
import {result} from "../constants/statistics";
import {fromStatToResult} from "../utils/statHelper.js";

export default function Home() {
    const [state, setState] = useState("statistics");
    const GAME_WRAPPER = "game-wrapper";
    const [time, setTime] = useState(14);
    const [isReset, setIsReset] = useState(false);

    return (
        <div className={GAME_WRAPPER}>
            {CurrentComponent()}
            <button onClick={() => setIsReset(true)}
                    style={{zIndex: 1000, position: "absolute", background: "red"}}>RESET
            </button>
            <button onClick={() => setTime(20)}
                    style={{zIndex: 1000, 'margin-left':'100px', position: "absolute", background: "blue"}}>SETTIME
            </button>
        </div>
    )

    function CurrentComponent() {

        switch (state) {
            case "tutorial": {
                return (
                    <Main className={`${GAME_WRAPPER}__main`} isTutorial={true} onAction={() => {
                        setState("counter")
                    }}>
                        <Tutorial className={`${GAME_WRAPPER}__tutorial`}/>
                    </Main>
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
                        <Statistics className={`${GAME_WRAPPER}__statistics`} statList={fromStatToResult(result)}/>
                    </Main>
                )
            }
        }
    }
}

function afterReset(isReset) {
    return !isReset;
}