import {Fragment} from "react";


export default function Element(props) {
    return(
        <div className="info__element element" key={props.key}>
            <h4 className="element__text">{props.text}</h4>
            <p className="element__value">{props.value}</p>
        </div>
    )
}