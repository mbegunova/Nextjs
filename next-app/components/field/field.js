import Brick from "../brick/brick";
import {forwardRef} from "react";

function Field({className = "", onSelect, dataForGame}, ref) {

    return (
        <div ref={ref} className={`${className} field`}>
            {getBricks()}
        </div>
    )

    function getBricks() {
        const rowsArray = [];
        Object.values(dataForGame.items).forEach((arr, index) => {
            rowsArray.push(<div className={"field__row-bricks"} key={index}>{getEcho(arr, index)}</div>);
        });
        return rowsArray;
    }

    function getEcho(arr, index1) {
        const rowOfBricks = [];
        arr.map(({number, animation, color, finger}, index2) => {
            rowOfBricks.push(
                <Brick className={"field__brick"} key={index1 + index2} number={number}
                       animationModifier={animation} sizeModifier={dataForGame.size}
                       color={color} isFingered={finger} isTutorial={dataForGame.isTutorial} onAction={(number) => {
                    onSelect(number);
                }}
                />
            );
        })
        return rowOfBricks;
    }
}

const FieldWithRef = forwardRef(Field);
export default FieldWithRef