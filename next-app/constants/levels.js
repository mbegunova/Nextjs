export const levels = [
    {
        level: 0,
        columns: 3,
        rows: 2,
        animations: false,
        isTutorial: true,
        tutorialNumbers: [
            75, 1, 35, 6, 885, 40,
        ],
        currentValue: 75,
        size: 1,
    },
    {
        level: 1,
        columns: 3,
        rows: 2,
        animations: false,
        minValue: 5,
        maxValue: 100,
        size: 1,
    },
    {
        level: 2,
        columns: 3,
        rows: 2,
        animations: false,
        minValue: 5,
        maxValue: 100,
        size: 1,
    },
    {
        level: 3,
        columns: 3,
        rows: 2,
        animations: true,
        minValue: 100,
        maxValue: 1000,
        size: 1,
    },
    {
        level: 4,
        columns: 4,
        rows: 3,
        animations: true,
        minValue: 100,
        maxValue: 1000,
        size: 2,
    },
    {
        level: 5,
        columns: 4,
        rows: 3,
        animations: true,
        minValue: 100,
        maxValue: 1000,
        size: 2,
    },
    {
        level: 6,
        columns: 4,
        rows: 4,
        animations: true,
        minValue: 100,
        maxValue: 1000,
        size: 3,
    },
    {
        level: 7,
        columns: 4,
        rows: 4,
        animations: true,
        minValue: 100,
        maxValue: 10000,
        size: 3,
    },
    {
        level: 8,
        columns: 5,
        rows: 5,
        animations: true,
        minValue: 500,
        maxValue: 10000,
        size: 4,
    },
    {
        level: 9,
        columns: 5,
        rows: 5,
        animations: true,
        minValue: 500,
        maxValue: 10000,
        size: 4,
    },
]

const test = {
    level: 1,
    columns: 3,
    rows: 2,
    animations: false,
    minValue: 5,
    maxValue: 100,
    items: []
}

f(test);

function f(test) {

    return test + {items: []}
}
