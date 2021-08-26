export const result = {
    totalPoints: 0,
    rightAnswers: {
        right: 2,
        all: 3,
    },
    accuracyAnswers: 0.5
}

export function useResult() {
    const {totalPoints, rightAnswers: {right, all}, accuracyAnswers} = result;
    return [{totalPoints, right, all, accuracyAnswers}, {setTotalPoints, updateResult, setRightAnswers}];
}

function updateResult({totalPoints, rightAnswers: {right, all}, accuracyAnswers}) {

}

function setTotalPoints(value) {
    result.totalPoints = value;
}

function setRightAnswers(right, all) {
    const {rightAnswers} = result;
    rightAnswers.right = right ?? rightAnswers.right;
    rightAnswers.all = all ?? rightAnswers.all;
}