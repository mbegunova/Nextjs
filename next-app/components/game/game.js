import {useState} from "react";
import Field from "../field/field.js";
import Info from "../info/info.js";
import {levels} from "../../constants/levels";
import {randomInteger, toGameInfoData} from "../../utils/statHelper";
import {items, settings, size} from "../../constants/constants";

export default function Game({className, modifier, onAction}) {
    let isTutorial = !!modifier;
    const [level, setLevel] = useState(1);
    let lvlInfoObj = levels.find(obj => obj.level === level);
    //const arrNumbers = isTutorial ? tutorialNumbers : createArr(lvlInfoObj.columns, lvlInfoObj.rows, lvlInfoObj.minValue, lvlInfoObj.maxValue);
    const itemsData = toGameInfoData(lvlInfoObj, createItemsData(lvlInfoObj));
    const currentValue = 0;
    //const currentValue = isTutorial ? lvlInfoObj.tutorialNumbers[lvlInfoObj.tutorialNumbers.length - 1]
    //   : itemsData.items[randomInteger(0, itemsData.items)].number;
//TODO: сделать случайное возвращенное значение
    //TODO: проверить объект  itemsData и передать его в field
    //TODO: реализация модификатора кнопок
    return (
        <div className={`game ${className || ""} ${modifier ? `game__${modifier}` : ""}`}
             onClick={modifier ? onAction : null}>
            <Info className={"game__info"} isTutorial={isTutorial}/>
            <div className="game__task">
                <h2 className="game__task-text">Найдите указанное число:</h2>
                <span className="game__task-value">{currentValue}</span>
            </div>
            <Field
                className={"game__field"} onSelect={(number) => {
                selectedHandler(number, currentValue);
            }}
                itemsData={items}
                size={size}
            />
            {modifier ? <div className={"game__to-continue"}>Нажите на экран, чтобы продолжить</div> : null}
        </div>
    )
}

function selectedHandler(number, currentValue) {
    console.log('did select', number)
    number === currentValue ? showReactionImage(true) : showReactionImage(false);
}

function showReactionImage(isRight) {
    isRight ? console.log("вы правы") : console.log("неверно");
}

function createArr(col, row, minValue, maxValue) {
    let arrOfNumbers = [];
    let value = col * row;
    let number;
    while (value--) {
        number = randomInteger(minValue, maxValue);
        while (arrOfNumbers.indexOf(number) !== -1)
            number = randomInteger(minValue, maxValue);
        arrOfNumbers[value] = number;
    }
    return arrOfNumbers;
}

function createItemsData(levelObject) {
    const items = {};
    let rows = levelObject.rows;
    let cols = levelObject.columns;
    while (cols--) {
        let arr = [];
        rows = levelObject.rows;
        while (rows--) {
            const color = settings.colors[randomInteger(0, settings.colors.length - 1)];
            const animation = settings.animations[randomInteger(0, settings.animations.length - 1)];
            const number = levelObject.level === 0
                ? levelObject.tutorialNumbers[rows + cols]
                : randomInteger(levelObject.minValue, levelObject.maxValue);
            const finger = levelObject.isTutorial ?? null;
            arr.push(Object.create({color, animation, number, finger}));
        }
        items[cols] = arr;
    }
    console.log(items);
    return items;
}