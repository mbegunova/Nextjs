import {useEffect, useState} from "react";

export default function Counter({className, onAction}) {
    const [count, setCount] = useState(3);

    useEffect(() => {
        if (count > 0) {
            setTimeout(() => setCount(count - 1), 1000);
        }
        else onAction();
    });

    return(
        <div className={ `counter ${className}`}>
            <div className="counter__wrapper">
                <h2 className="counter__value">
                    {count}
                </h2>
            </div>
        </div>
    )
}