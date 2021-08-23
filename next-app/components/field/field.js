import {useState} from "react";
import Brick from "../brick/brick";
import {settings} from "../../constants/constants";
import {randomInteger} from "../../utils/statHelper";

export default function Field({className = "", getValue, checkHandler, onSelect}) {
    const [col, setCol] = useState(3);
    const [row, setRow] = useState(2);
    const [difficult, setDifficult] = useState(1);
    let currentValue = 0;
    let numbersArray = [];
//TODO: передовать col row difficult numbersArray в пропсах

    return (
        <div className={`${className} field`}>
            {RowsBrick()}
        </div>
    )

    function RowsBrick() {
        const arr = [];
        let value = row;
        while (value--)
            arr.push((<div className={"field__row-bricks"} key={value}> {
                ColsBrick()
            } </div>));
        currentValue = numbersArray[randomInteger(0, numbersArray.length - 1)];
        if (typeof getValue === "function") getValue(currentValue);
        return arr;
    }

    function ColsBrick() {
        let value = col;
        const arr = [];
        let color;
        let animation;
        let number;
        while (value--) {
            number = randomInteger(1 * difficult, 100 * difficult);
            numbersArray.push(number);
            color = settings.colors[randomInteger(0, settings.colors.length - 1)];
            animation = settings.animations[randomInteger(0, settings.animations.length - 1)];
            arr.push(<Brick className={"field__brick"} key={value}
                            number={number}
                            animationModifier={animation}
                            color={color}
                            onClick={()=>{
                                //checkHandler(value);
                            }
                            }/>);
        }
        return arr;
    }
}
