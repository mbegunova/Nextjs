export const result = {
    totalPoints: 0,
    rightAnswers: {
        right: 0,
        all: 0,
    },
    accuracyAnswers: 0,
    rightTogether: 0,
}

export function useResult() {
    const {totalPoints, rightAnswers: {right, all}, accuracyAnswers, rightTogether} = result;
    return [{totalPoints, rightAnswers: {right, all}, accuracyAnswers, rightTogether}, {
        updateResult,
        resetResult
    }];
}

export function updateResult({totalPoints, rightAnswers: {right, all}}) {
    setTotalPoints(totalPoints);
    setRightAnswers(right, all);
    setAccuracyAnswers(right / all);
}

function setTotalPoints(value) {
    result.totalPoints = value;
}

function setAccuracyAnswers(value) {
    result.accuracyAnswers = value;
}

function setRightAnswers(right, all) {
    const {rightAnswers} = result;
    rightAnswers.right = right ?? rightAnswers.right;
    rightAnswers.all = all ?? rightAnswers.all;
}


function resetResult() {
    setTotalPoints(0);
    setRightAnswers(0, 0);
    setAccuracyAnswers(0);
}