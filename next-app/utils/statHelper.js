//utils/ statHelper.js
import {stat} from "../constants/statistics";

export function fromStatToResult(statList) {
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