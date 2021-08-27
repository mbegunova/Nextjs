import Game from "../game/game";
import {useState} from "react";
import {levels} from "../../constants/levels";


export default function GameWrapper({className = "", modifier, onEnd, onToCounter, result}) {
    const [isTutorial, setIsTutorial] = useState(!!modifier);
    const [image, setImage] = useState(null);
    const [level, setLevel] = useState(isTutorial ? 0 : 1);
    const [bonusLevel, setBonusLevel] = useState(0)
    const RIGHT_IMAGE = "images/right.png";
    const WRONG_IMAGE = "images/wrong.png";

    let theEnd = false;
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
                  bonusLevel={bonusLevel}
                  color={'#4cb9ed'}
                  result={result}
                  timeIsOut={() => {
                      theEnd = true;
                  }}
                  onClick={() => {
                      if (!isTutorial || typeof onToCounter !== "function") return;
                      onToCounter();
                  }}
                  onSelect={
                      (number, currentValue) => {
                          if (image !== null || isTutorial) return;
                          const [res, isRight, bonusLvl] = handlerWithResult(number, currentValue, setLevel, level, result, bonusLevel);
                          setBonusLevel(bonusLvl);
                          isRight ? setImage(RIGHT_IMAGE) : setImage(WRONG_IMAGE);
                          setTimeout(() => {
                              setImage(null)
                          }, 800);
                          if (theEnd) onEnd(res);
                      }
                  }
            />
        </div>
    )
}

function handlerWithResult(number, currentValue, setLevel, level, result, bonusLevel) {
    const isRight = number === currentValue;
    console.log(`${isRight ? "вы правы" : "неверно"}`);
    const nextLevel = lvlChange(level, isRight);
    if (nextLevel !== level)
        setTimeout(() => {
            setLevel(nextLevel);
            bonusLevel = 0;
        }, 800);
    else if (level === levels.length - 1) bonusLevel++;
    result.rightTogether = isRight ? ((result.rightTogether < 5) ? result.rightTogether + 1 : 5) : 0;

    if (isRight) result.totalPoints = result.totalPoints + (level * (result.rightTogether || 1));
    const a = result.rightAnswers.right += (isRight ? 1 : 0);
    const b = result.rightAnswers.all += 1;
    result.accuracyAnswers = (a / b);
    console.log(result);
    return [result, isRight, bonusLevel];
}

function lvlChange(level, isUp) {
    const nextLevel = isUp ? level + 1 : level - 1;
    return Math.min(levels.length - 1, Math.max(1, nextLevel));
}


