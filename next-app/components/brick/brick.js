export default function Brick({className = "", number, onAction, isFingered = false, color, animationModifier}) {

    return (

        <button className={`brick ${className}  ${animationModifier ? `brick_${animationModifier}` : ""}`}
                onClick={() => {
                    if (typeof onAction === "function") onAction(number);
                }}
                style={{backgroundColor: color}}>
            <span className={"brick__number-wrapper"}>
                 {number}
            </span>
            {isFingered ? Finger() : null}
        </button>
    )
}

function Finger() {
    return <img onClick={() => {
        return false;
    }} className={"brick__finger"} alt={"Указатель на ответ"} src={"/images/finger.svg"} width={96} height={103}/>
}
//Клики запретить
// display: block
// убрать лишние стили