import {Fragment} from "react";
import {statistics} from "../../constants/copyright";


export default function Statistics() {
    return(
    <div className="main__statistics statistics">
        <ul className="statistics__list">
            {statisticList()}
        </ul>
    </div>
    )

    function statisticList(){
        statistics.map(({text, value}, index) =>{
            return(
            <li className="statistics__item" key={index}>
                <h4 className="statistics__item-text">{text}</h4>
                <i className="statistics__item-value">{value}</i>
            </li>
            )
        })
    }
}