export default function Element({className = "", text, value}) {
    return (
        <div className={`${className} element`}>
            <h4 className="element__text">{text}</h4>
            <p className="element__value">{value}</p>
        </div>
    )
}
