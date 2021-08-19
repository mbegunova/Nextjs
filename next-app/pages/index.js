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
    return (
        <>
            {currentComponent()}
            </>
    )

    function currentComponent() {

        switch (state) {
            case "tutorial": {
                return (
                    <Main className={`${GAME_WRAPPER}__main`} isTutorial={true} onAction={() => {
                        setState("counter")
                    }}>
                        <Tutorial/>
                    </Main>
                )
            }
            case "counter": {
                return (
                    <Counter className={`${GAME_WRAPPER}__counter`} onAction={() => {
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
                    <Main className={`${GAME_WRAPPER}__main ${GAME_WRAPPER}__main_result main`} isTutorial={false} onAction={() => {
                        setState("tutorial")
                    }} modifier={"result"}>
                        <Statistics statList={fromStatToResult(result)}/>
                    </Main>
                )
            }
        }
    }
}
