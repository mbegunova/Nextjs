import {Fragment} from "react";
import Field from "./field/field.js";

export default function Game(){
    const [isTutorial, setIsTutorial] = useState(true);
    return(
        <Fragment>
        <Field/>,
            <div className="game__task">
                <h2>Найдите указанное число</h2>
                <i>{value}</i>
            </div>,
        <Field/>,
        </Fragment>
    );
}