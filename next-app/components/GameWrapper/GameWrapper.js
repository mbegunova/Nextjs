import Game from "../game/game";
import {useState} from "react";
import {levels} from "../../constants/levels";
import {createResultObject} from "../../utils/statHelper";


export default function GameWrapper({className, modifier, onEnd, onToCounter}) {
    const [isTutorial, setIsTutorial] = useState(false);
    const [level, setLevel] = useState(isTutorial ? 0 : 1);
    let result = createResultObject();
    let isEnd = false;

    //TODO: делать подсчет результатов c выводом на экран
    //TODO: реализовать таймер и переключение после него

    return (
        <div className={className}>
            <Game className={`${className}__game`} modifier={isTutorial ? "tutorial" : null}
                  isTutorial={isTutorial}
                  level={level} color={'#4cb9ed'}
                  onClick={() => {
                      if (!isTutorial || typeof onToCounter !== "function") return;
                      onToCounter();
                  }}
                  onSelect={
                      (number, currentValue) => {
                          if (isTutorial) return;
                          [result, isEnd] = handlerWithResult(number, currentValue, setLevel, level, result);
                          console.log("result: ", result, "level", level);
                          console.log(isEnd);
                          if(isEnd) onEnd(result);
                      }
                  }
            />
        </div>
    )
}

function handlerWithResult(number, currentValue, setLevel, level, result) {
    const isRight = selectedHandler(number, currentValue)
    const nextLevel = lvlChange(level, isRight);
    if (nextLevel !== level)
        setLevel(nextLevel);
    result.totalPoints+=level;
    const a = result.rightAnswers.right += isRight? 1: 0;
    const b = result.rightAnswers.all +=1;
    result.accuracyAnswers = Math.round(a/b*100);
    //if(nextLevel===levels.length-1) onEnd(result);
    const isEnd = nextLevel === 3;
    return [result, isEnd];
}


function selectedHandler(number, currentValue) {
    const isRight = number === currentValue;
    showReactionImage(isRight);
    return isRight;
}

function lvlChange(level, isUp) {
    const nextLevel = isUp ? level + 1 : level - 1;
    return Math.min(levels.length - 1, Math.max(1, nextLevel));
}


function showReactionImage(isRight) {
    isRight ? console.log("вы правы") : console.log("неверно");
    //console.log(document);
    //const image = document.createElement(<img className={`game-wrapper__${isRight? "right":"wrong"}`}/>)
   // setTimeout(()=>{document.removeChild(image)}, 1000);
}

