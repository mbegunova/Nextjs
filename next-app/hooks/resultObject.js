export const result = {
    totalPoints: 0,
    rightAnswers: {
        right: 0,
        all: 0,
    },
    accuracyAnswers: 0,
    rightTogether: 0,
    record: 0,
}

export function useResult() {
    const {totalPoints, rightAnswers: {right, all}, accuracyAnswers, rightTogether, record} = result;
    return [{totalPoints, rightAnswers: {right, all}, accuracyAnswers, rightTogether, record}, {
        updateResult,
        resetResult,
        setRecord,
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

function getRecord() {
    return result['record'] ?? 0;
}

function setRecord(value) {
    if (value > result['record'])
        result['record'] = value;
}

function resetResult() {
    setTotalPoints(0);
    setRightAnswers(0, 0);
    setAccuracyAnswers(0);
}