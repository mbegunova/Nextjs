import {useEffect, useState} from "react";


export default function Bonus({className="", bonus}) {
    return(
        <div className={`${className} bonus`}>
            <h4 className="bonus__text"> БОНУС</h4>
            <div className="bonus__value">{'x'+bonus}</div>
        </div>
    )
}