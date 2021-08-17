import {Fragment} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return(
        <Fragment>
            <div className="counter__wrapper">
                <h2 className="counter__value">
                    {count}
                </h2>
            </div>

        </Fragment>
    )
}