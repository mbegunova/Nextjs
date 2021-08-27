import {stat} from "../constants/statistics";
import {levels} from "../constants/levels";
import {rng} from "./rng";

export function fromStatToResult(resultList) {
    // преобразут список статистики к шаблонные строки
    return Object.entries(resultList).map(([key, value]) => {
        switch (key) {
            case "rightAnswers":
                value = `${value.right} из ${value.all}`
                break;
            case "accuracyAnswers":
                value = `${Math.round(value * 100)}%`
                break;
        }
        return [
            {text: stat[key], value}
        ]
    })
}

export function toGameInfoData(level, {colors, animations}) {
    // озвращает объект с данными о текущем уровне + данные всех [bricks]
    const isTutorial = level === 0;
    if (!level) {
        level = 0
    }
    const levelObject = levels.find(obj => obj.level === level);
    const items = [];
    let {rows, columns: cols} = levelObject;
    let value = rows * cols - 1;
    let randomIndex = rng.nextRange(0, value);
    let currentValue = isTutorial ? levelObject.currentValue : null;

    while (rows--) {
        const arr = [];
        cols = levelObject.columns;
        while (cols--) {
            const color = colors[rng.nextRange(0, colors.length - 1)];
            const animation = (isTutorial || level < 3) ? null : animations[rng.nextRange(0, animations.length - 1)];
            const number = levelObject.level === 0
                ? levelObject.tutorialNumbers[value]
                : rng.nextRange(levelObject.minValue, levelObject.maxValue);
            const finger = (levelObject.isTutorial && !value) ?? null;
            if (!isTutorial && value === randomIndex) currentValue = number;
            arr.unshift(Object.create({color, animation, number, finger}));
            value--;
        }
        items.unshift(arr);
    }

    return {...levelObject, currentValue, items};
}
