import {Fragment} from "react";
import {statistics} from "../../constants/statistics";


export default function Statistics({statList}) {
    return (
        <div className="main__statistics statistics">
            <table className="statistics__list">
                <tbody>
                {StatisticList(statList)}
                </tbody>
            </table>
        </div>
    )


}

function StatisticList(statList) {
    return statList.map(({text, value}, index) => {
        return (
            <tr className="statistics__item" key={index}>
                <td className="statistics__item-text">{text}</td>
                <td className="statistics__item-value">{value}</td>
            </tr>
        )
    })
}