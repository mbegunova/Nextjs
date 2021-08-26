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
                value = `${value * 100}%`
                break;
        }
        return [
            {text: stat[key], value}
        ]
    })
}

export function toGameInfoData(level, settings) {
    // озвращает объект с данными о текущем уровне + данные всех [bricks]
    const isTutorial = level === 0;
    if (!level) {
        level = 0
    }
    const levelObject = levels.find(obj => obj.level === level);
    const items = [];
    let rows = levelObject.rows;
    let cols = levelObject.columns;
    let value = rows * cols - 1;

    while (rows--) {
        const arr = [];
        cols = levelObject.columns;
        while (cols--) {
            const color = settings.colors[rng.nextRange(0, settings.colors.length - 1)];
            const animation = settings.animations[rng.nextRange(0, settings.animations.length - 1)];
            const number = levelObject.level === 0
                ? levelObject.tutorialNumbers[value]
                : rng.nextRange(levelObject.minValue, levelObject.maxValue);
            const finger = levelObject.isTutorial ?? null;
            arr.unshift(Object.create({color, animation, number, finger}));
            value--;
        }
        items.unshift(arr);
    }

    const arrNumbers = isTutorial ? null : items.flat().map((el) => {
        return el.number;
    });
    const currentValue = isTutorial ? levelObject.currentValue
        : arrNumbers[rng.nextRange(0, arrNumbers.length - 1)];

    return {...levelObject, currentValue, items};
}

export function createResultObject(){
    return {
        totalPoints: 0,
        rightAnswers:{
            right:0,
            all:0,
        },
        accuracyAnswers:0,
    };
}