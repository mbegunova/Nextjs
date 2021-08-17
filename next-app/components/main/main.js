import {Fragment} from "react";
import Tutorial from "./tutorial/tutorial.js";
import Statistics from "./statistics/statistics.js";

export default function Main() {
    const [isTutorial, setIsTutorial] = useState(true);



    return(
        <Fragment>
            <div className="main__popup">
                <h1 className="main__popup-title">Найдите число</h1>
                <h2 className="main__popup-subtitle">Тренажер на внимание</h2>
            </div>
            <Tutorial className="main__tutorial" isActive={isTutorial} />
            <Statistics isActive={!isTutorial} />
            <button className="main__button">ДАЛЕЕ</button>
        </Fragment>
    )
}