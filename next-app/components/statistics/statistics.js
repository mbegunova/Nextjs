import {Fragment} from "react";
import {statistics} from "../../constants/statistics";


export default function Statistics() {
    return(
    <div className="main__statistics statistics">
        <table className="statistics__list">
            <tbody>
            {statisticList()}
            </tbody>
        </table>
    </div>
    )

    function statisticList(){
        return statistics.items.map(({text, value}, index) =>{
            return(
            <tr className="statistics__item" key={index}>
                <td className="statistics__item-text">{text}</td>
                <td className="statistics__item-value">{value}</td>
            </tr>
            )
        })
    }
}