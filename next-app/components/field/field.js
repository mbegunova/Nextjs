import {Fragment, useState} from "react";
import Brick from "../brick/brick";


export default function Field() {
    const [col, setCol] = useState(3);
    const [row, setRow] = useState(2);
    const [difficult, setDifficult] = useState(1);
    let rowsArray = [row];
    let colsArray = [col];


    return (
        <div className={"field"}>
            {rowsBrick()}
        </div>
    )

    function rowsBrick() {
        debugger
        return rowsArray.map((el, index) => {
            return (
                <div key={index}> {
                    colsBrick()
                } </div>)
        })
    }

    function colsBrick(value) {
     /*   const arr = [];
        while (value--)
            arr.push((<button key={value}></button>));*/
        return colsArray.map((el, index) => {
            return (<button key={index}></button>)
        })
        return arr;
    }
}