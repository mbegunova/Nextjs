import {fromStatToResult} from "../../utils/statHelper";

export default function Statistics({statList, resultObj}) {
    return (
        <div className="main__statistics statistics">
            <table className="statistics__list">
                <tbody>
                {StatisticList(statList, resultObj)}
                </tbody>
            </table>
        </div>
    )
}

function StatisticList(statList, resultObj) {
    return Object.entries(fromStatToResult(resultObj)).map(([key, object], index) => {
        const objectResult =  object[0];
        console.log(objectResult);
        return (
            <tr className="statistics__item" key={index}>
                <td className="statistics__item-text">{objectResult.text}</td>
                <td className="statistics__item-value">{objectResult.value}</td>
            </tr>
        )
    })
}