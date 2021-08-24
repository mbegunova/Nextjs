export default function Brick({className = "", number, onAction, color, isFingered = false, animationModifier, sizeModifier}) {

    return (
        <button className={`brick ${className}  ${animationModifier ? `brick_${animationModifier}` : ""}
        ${sizeModifier ? `brick_${sizeModifier}` : ""}`}
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
    return <img className={"brick__finger"} alt={"Указатель на ответ"} src={"/images/finger.svg"} width={96}
                height={103}/>
}
