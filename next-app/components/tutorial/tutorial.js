import {tutorial} from "../../constants/copyright";


export default function Tutorial() {
    return (
        <div className="main__tutorial tutorial">
            <h2 className="tutorial__title">{tutorial.title}</h2>
            <ul className="tutorial__list">
                {TutorialList()}
            </ul>
        </div>
    )
}

function TutorialList() {
    return tutorial.items.map(({title, subtitle}, index) => {
        return (
            <li className="tutorial__item" key={index}>
                <div className="tutorial__item-title">{title}</div>
                <div className="tutorial__item-subtitle">{subtitle}</div>
            </li>
        )
    })
}
