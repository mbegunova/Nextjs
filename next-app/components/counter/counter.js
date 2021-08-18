import {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    setTimeout(()=>{setCount(count+1);}, 1000);
    setTimeout(()=>{setCount(count+1);}, 1000);
    setTimeout(()=>{setCount(count+1);}, 1000);

    return(
        <>
            <div className="counter__wrapper">
                <h2 className="counter__value">
                    {count}
                </h2>
            </div>
        </>
    )
}