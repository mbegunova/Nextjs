import {useEffect, useReducer, useState} from "react";
import PropTypes from 'prop-types'; // ES6


export default function Counter({className="", onAction, value, isReset, afterReset}) {
    const [count, setCount] = useState(value ?? 3);
    const [timerId, setTimerId] = useState(null);

    useEffect(() => {
        if (timerId === null) return;
        updateTimer(timerId, setTimerId, value, setCount);
    }, [value])

    useEffect(() => {
        updateTimer(timerId, setTimerId, value, setCount);
        if (isReset && typeof afterReset === "function") afterReset();
    }, [isReset])

    useEffect(() => {
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

Counter.propTypes = {
    className: PropTypes.string,
    onAction: PropTypes.function,
    afterReset: PropTypes.func,
    value: PropTypes.number,
    isReset: PropTypes.any,
};