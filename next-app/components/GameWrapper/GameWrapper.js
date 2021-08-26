import Game from "../game/game";
import {useState} from "react";
import {levels} from "../../constants/levels";


export default function GameWrapper({className = "", modifier, onEnd, onToCounter, result}) {
    const [isTutorial, setIsTutorial] = useState(!!modifier);
    const [image, setImage] = useState(null);
    const [level, setLevel] = useState(isTutorial ? 0 : 1);
    let isEnd, isRight = false;
    const RIGHT_IMAGE = "images/right.png";
    const WRONG_IMAGE = "images/wrong.png";
    const THE_LAST_LEVEL = 9;
    return (
        <div className={className}>
            {image === null
                ? null
                :
                <img className={`${className}__reaction`} src={image} alt={`${image === RIGHT_IMAGE ? "yes" : "no"}`}/>}
            <Game className={`${className}__game`}
                  modifier={isTutorial ? "tutorial" : null}
                  isDisappear={image !== null}
                  isTutorial={isTutorial}
                  level={level}
                  color={'#4cb9ed'}
                  result={result}
                  onClick={() => {
                      if (!isTutorial || typeof onToCounter !== "function") return;
                      onToCounter();
                  }}
                  onSelect={
                      (number, currentValue) => {
                          if (isTutorial) return;
                          [result, isRight] = handlerWithResult(number, currentValue, setLevel, level, result);
                          debugger
                          isEnd = (level === THE_LAST_LEVEL && isRight);
                          isRight ? setImage(RIGHT_IMAGE) : setImage(WRONG_IMAGE);
                          setTimeout(() => {
                              setImage(null)
                          }, 800);
                          if (isEnd) onEnd(result);
                      }
                  }
            />
        </div>
    )
}

function handlerWithResult(number, currentValue, setLevel, level, result) {
    const isRight = number === currentValue;
    isRight ? console.log("вы правы") : console.log("неверно");
    const nextLevel = lvlChange(level, isRight);
    if (nextLevel !== level)
        setLevel(nextLevel);

    isRight ? result.rightTogether += 1 : result.rightTogether = 0;
    debugger
    result.totalPoints += isRight ? (level * result.rightTogether) : 0;
    const a = result.rightAnswers.right += (isRight ? 1 : 0);
    const b = result.rightAnswers.all += 1;
    result.accuracyAnswers = (a / b);
    return [result, isRight];
}

function lvlChange(level, isUp) {
    const nextLevel = isUp ? level + 1 : level - 1;
    return Math.min(levels.length - 1, Math.max(1, nextLevel));
}


