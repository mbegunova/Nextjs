import Main from "../components/main/main";
import Tutorial from "../components/tutorial/tutorial";
import {useRef, useState} from "react";
import Counter from "../components/counter/counter";
import Statistics from "../components/statistics/statistics";
import {stat} from "../constants/statistics";
import GameWrapper from "../components/GameWrapper/GameWrapper";
import {useResult} from "../hooks/resultObject";
import CSSTransition from "react-transition-group/CSSTransition";
import React from "react";
import {timeForDisappearGame} from "../constants/constants";

export default function Home() {
    const [state, setState] = useState("tutorial");
    const GAME_WRAPPER = "game-wrapper";
    const [time, setTime] = useState(3);
    const [isReset, setIsReset] = useState(false);
    const [result, setResult] = useResult(); //наш хук
    const [inProp, setInProp] = useState(false);
    let isEnd = false;
    const GameWrapperRef = useRef();


    return (
            CurrentComponent()
    )


    function CurrentComponent() {
        switch (state) {
            case "tutorial": {
                return (
                    <Main className={`${GAME_WRAPPER}__main`} isTutorial={true} onAction={() => {
                        setState("game-tutorial");
                    }}>
                        <Tutorial className={`${GAME_WRAPPER}__tutorial`}/>
                    </Main>
                )
            }
            case "game-tutorial": {
                return (<GameWrapper className={GAME_WRAPPER} isTutorial={true}
                                     modifier={"tutorial"}
                                     onToCounter={() => {
                                         setState("counter");
                                     }
                                     }/>)

            }
            case "counter": {
                return (<Counter className={`${GAME_WRAPPER}__counter`} value={time}
                                 afterReset={() => {
                                     setIsReset(!isReset)
                                 }} isReset={isReset} onAction={() => {
                    setState("game");
                }}/>)
            }
            case "game": {
                return (
                    <CSSTransition in={inProp} timeout={timeForDisappearGame}  nodeRef={GameWrapperRef} onExited={() => {
                        setState("statistics");
                    }}
                                   classNames={`${state === "game" ? "GW" : ""}`}>
                        <GameWrapper ref={GameWrapperRef} className={GAME_WRAPPER} isTutorial={false}
                                     result={result} setResult={setResult}
                                     setInProp={setInProp}
                                     onEnd={({totalPoints, rightAnswers: {right, all}}) => {
                                         setResult.updateResult({
                                             totalPoints,
                                             rightAnswers: {right, all},
                                         });
                                         setResult.setRecord(totalPoints);
                                         isEnd = true;
                                         setInProp(false);
                                     }}
                        />
                    </CSSTransition>
                );
            }

            case "statistics": {
                return (<Main className={`${GAME_WRAPPER}__main ${GAME_WRAPPER}__main_result main`} isTutorial={false}
                              onAction={() => {
                                  setState("tutorial");
                                  setResult.resetResult();
                              }} modifier={"result"}>
                    <Statistics className={`${GAME_WRAPPER}__statistics`} statList={stat}
                                resultObj={result}/>
                </Main>)
            }
        }
    }
}