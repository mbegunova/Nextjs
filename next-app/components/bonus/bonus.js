import {Fragment} from "react";
import Tutorial from "./tutorial/tutorial.js"


export default function Main() {
    const [isResult, setIsResult] = useState(false);

    return(
        <Fragment>
            <div className="main__popup-title">
                <h1 className="main__popup-title">Найди число</h1>
                <h2 className="main__popup-subtitle">Тренажер на внимание</h2>
            </div>
            <Tutorial/>
            <button>Далее</button>
        </Fragment>
    )
}