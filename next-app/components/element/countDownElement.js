import {useEffect, useState} from "react";
import Element from "./element";

export default function CountDownElement({className = "", text, timeValue, timeIsOut}) {
    const [time, setTime] = useState(timeValue);
    useEffect(() => {
        if (time === 0) {
            timeIsOut();
            return;
        }
        setTimeout(() => {
            setTime((time) => time - 1);
        }, 1000)
    }, [time])

    return (<Element className={className} text={text} value={(time < 10 ? "00:0" : "00:") + time}/>)
}