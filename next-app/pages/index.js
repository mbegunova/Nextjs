import Main from "../components/main/main";
import Game from "../components/game/game";
import Tutorial from "../components/tutorial/tutorial";
import {useState} from "react";
import Counter from "../components/counter/counter";
import Statistics from "../components/statistics/statistics";

export default function Home() {
    const [state, setState] = useState("statistics");
    return (
        <>
            {currentComponent()}
        </>
    )

    function currentComponent() {

        switch (state) {
            case "tutorial": {
                return (
                    <Main className={"game-wrapper__main main"} onAction={() => {
                        setState("counter")
                    }}>
                        <Tutorial/>
                    </Main>
                )
            }
            case "counter": {
                return (
                    <Counter onAction={() => {
                        setState("game")
                    }}/>
                )
            }
            case "game": {
                return (
                    <Game onAction={() => {
                        setState("statistics")
                    }}>
                    </Game>
                )
            }
            case "statistics": {
                return (
                    <Main className={"game-wrapper__main main"} onAction={() => {
                        setState("tutorial")
                    }} modifier={"result"}>
                        <Statistics/>
                    </Main>
                )
            }
        }
    }
}
