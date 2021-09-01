import Game from "../game/game";
import {forwardRef, useEffect, useState} from "react";
import {levels} from "../../constants/levels";
import React from 'react';
import {timeForShowImageReaction} from "../../constants/constants";

function GameWrapper({className = "", modifier, onEnd, onToCounter, result, setResult, setInProp}, ref) {
    const [isTutorial, setIsTutorial] = useState(!!modifier);
    const [image, setImage] = useState(null);
    const [level, setLevel] = useState(isTutorial ? 0 : 1);
    const [allAnswers, setAllAnswers] = useState(0);
    const [theEnd, setTheEnd] = useState(false)
    const RIGHT_IMAGE = "images/right.png";
    const WRONG_IMAGE = "images/wrong.png";

    useEffect(()=>{
        if(isTutorial) return;
        setInProp(true);
    }, [])


    return (
        <div  ref={ref} className={className}>
            {image === null
                ? null
                :
                <img className={`${className}__reaction`} src={image} alt={`${image === RIGHT_IMAGE ? "yes" : "no"}`}/>}
            <Game  className={`${className}__game`}
                  modifier={isTutorial ? "tutorial" : null}
                  isTutorial={isTutorial}
                  level={level}
                  allAnswers={allAnswers}
                  color={'#4cb9ed'}
                  result={result}
                  timeIsOut={() => {
                      setTheEnd(true);
                  }}
                  onClick={() => {
                      if (!isTutorial || typeof onToCounter !== "function") return;
                      onToCounter();
                  }}
                  onSelect={
                      (number, currentValue) => {
                          if (image !== null || isTutorial) return;
                          const [isRight, resultObj] = handlerWithResult(number, currentValue, setLevel, level, result);
                          setAllAnswers(resultObj.rightAnswers.all);
                          const {totalPoints, rightAnswers: {right, all}} = resultObj;
                          setResult.updateResult({
                              totalPoints,
                              rightAnswers: {right, all},
                          });

                          isRight ? setImage(RIGHT_IMAGE) : setImage(WRONG_IMAGE);

                          setTimeout(() => {
                              setImage(null)
                          }, timeForShowImageReaction);

                          if (theEnd) onEnd(result);
                      }
                  }
            />
        </div>
    )
}

function handlerWithResult(number, currentValue, setLevel, level, result) {

    const isRight = number === currentValue;
    console.log(`${isRight ? "вы правы" : "неверно"}`);
    const nextLevel = lvlChange(level, isRight);
    if (nextLevel !== level)
        setLevel(nextLevel);

    result.rightTogether = isRight ? ((result.rightTogether < 5) ? result.rightTogether + 1 : 5) : 0;
    if (isRight) result.totalPoints = result.totalPoints + (level * (result.rightTogether || 1));
    const a = result.rightAnswers.right += (isRight ? 1 : 0);
    const b = result.rightAnswers.all += 1;
    result.accuracyAnswers = (a / b);

    return [isRight, result];
}

function lvlChange(level, isUp) {
    const nextLevel = isUp ? level + 1 : level - 1;
    return Math.min(levels.length - 1, Math.max(1, nextLevel));
}


const GameWrapperRef = forwardRef(GameWrapper);
export default  GameWrapperRef;