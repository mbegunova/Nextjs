import {useEffect, useReducer, useState} from "react";

export default function Counter({className, onAction, value, isReset, afterReset}) {
    const [count, setCount] = useState(value ?? 3);
    const [timerId, setTimerId] = useState(null);

    useEffect(() => {
        if (timerId === null) return;
        updateTimer(timerId, setTimerId, value, setCount);
    }, [value])

    useEffect(() => {
        updateTimer(timerId, setTimerId, value, setCount);
        console.log("Изменился isReset");
        if (isReset && typeof afterReset === "function") afterReset();
    }, [isReset])

    useEffect(() => {
        console.log("Изменился count");
        if (!count) {
            clearInterval(timerId);
            onAction();
        }
    }, [count])

    return (
        <div className={`counter ${className}`}>
            <div className="counter__wrapper">
                <h2 className="counter__value">
                    {count}
                </h2>
            </div>
        </div>
    )
}

function updateTimer(timerId, setTimerId, value, setCount) {
    clearInterval(timerId);
    setCount(value);
    const intervalId = setInterval(() =>
        setCount((count) => count - 1), 1000);
    setTimerId(intervalId);

}

