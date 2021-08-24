import Brick from "../brick/brick";

export default function Field({className = "", onSelect, size, itemsData}) {
    return (
        <div className={`${className} field`}>
            {getBricks()}
        </div>
    )

    function getBricks() {
        const rowsArray = [];
        itemsData.forEach((arr, index1) => {
            rowsArray.push(<div className={"field__row-bricks"} key={index1}>{getEcho(arr, index1)}</div>);
        });
        return rowsArray;
    }

    function getEcho(arr, index1) {
        const rowOfBricks = [];
        arr.map(({number, animation, color, finger}, index2) => {
            rowOfBricks.push(<Brick className={"field__brick"} key={index1 + index2} number={number}
                                    animationModifier={animation} sizeModifier={size}
                                    color={color} isFingered={finger} onAction={(number) => {onSelect(number);}}/>);
        })
        return rowOfBricks;
    }
}
