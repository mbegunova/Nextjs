//utils/ statHelper.js

export function fromStatToResult(statList) {

    return Object.entries(statList).map(([key,value])=>{
        let text;
        switch (key) {
            case "totalPoints":
                text = `${value}`
                break;
            case "rightAnswers":
                text = `${value.right} из ${value.all}`
                break;
            case "accuracyAnswers":
                text= `${value}%`
        }
        return [
            {text: text, value: value}
        ]
    })

}