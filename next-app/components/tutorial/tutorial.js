import {Fragment} from "react";
import {tutorial} from "../../constants/copyright";



export default function Tutorial() {
    return(
        <div className="main__tutorial tutorial">
            <h2 className="tutorial_title">{ tutorial.title }</h2>
            <ul className="tutorial__list">
                {TutorialList()}
            </ul>
        </div>
    )
}

function TutorialList() {
    return tutorial.items.map(({title, subtitle}, index)=>{
        return (
            <li className="tutorial__item" key={index}>
                <h3 className="tutorial__item_title">{title}</h3>
                <p className="tutorial__item-subtitle">{subtitle}</p>
            </li>
        )
    })
}
