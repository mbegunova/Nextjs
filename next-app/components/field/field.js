import {Fragment, useState} from "react";
import Brick from "../brick/brick";


export default function Field({className}) {
    const [col, setCol] = useState(3);
    const [row, setRow] = useState(2);
    const [difficult, setDifficult] = useState(1);


    return (
        <div className={`${className} field`}>
            {RowsBrick()}
        </div>
    )

    function RowsBrick() {
        const arr = [];
        let value = row;
        while (value--)
            arr.push((<div key={value}> {
                ColsBrick()
            } </div>));
        return arr;
    }

    function ColsBrick() {
        let value = col;
        const arr = [];
        while (value--)
            arr.push(<Brick/>);
        return arr;
    }
}