import {Fragment, useState} from "react";


export default function Field() {
    const[col, setCol] = useState(3);
    const[row, setRow] = useState(2);
    const[difficult, setDifficult] = useState(1);

    return(
        <div>
            {rowsBrick(row)}
        </div>
    )

    function rowsBrick(count){
        for (let i in count){
            return(
                <div className="field__row-bricks">
                    {colsBrick(col)}
                </div>
            )
        }
    }

    function colsBrick(count){
        for (let i in count){
            return(
                <button className="field__brick brick">
                </button>
            )
        }
    }
}