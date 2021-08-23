//utils/ statHelper.js
import {stat} from "../constants/statistics";

export function fromStatToResult(statList) {
    // преобразут список статистики к шаблонные строки
    return Object.entries(statList).map(([key, value]) => {
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

export function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
