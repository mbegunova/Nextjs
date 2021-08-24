//utils/ statHelper.js
import {stat} from "../constants/statistics";
import {settings} from "../constants/constants";

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
    const rng = new RNG(17);
    return rng.nextRange(min, max);
}



function RNG(seed) {
    // LCG using GCC's constants
    this.m = 0x80000000; // 2**31;
    this.a = 1103515245;
    this.c = 12345;

    this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
}
RNG.prototype.nextInt = function() {
    this.state = (this.a * this.state + this.c) % this.m;
    return this.state;
}
RNG.prototype.nextRange = function(start, end) {
    // returns in range [start, end): including start, excluding end
    // can't modulu nextInt because of weak randomness in lower bits
    let rangeSize = end - start;
    let randomUnder1 = this.nextInt() / this.m;
    return start + Math.floor(randomUnder1 * rangeSize);
}

export function toGameInfoData(levelObject, bricksInfoObject){
    // функция которая принимает обхект с данными об уровне и возвращает объект с данными
// об уровне и {} с данными для всех bricks

    return {
        levelData: levelObject,
        itemData: bricksInfoObject,
    }
}