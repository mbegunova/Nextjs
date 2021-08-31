export const settings = {
    colors: [
        '#f28f34',
        '#fc74b2',
        '#8f3acc',
        '#95ca4c',
        '#4cb9ed',
    ],
    animations: [
        'rotate-animation',
        'opacity-animation',
        'pulse-animation',
    ],
}


export const titles = {
    tutorial: [
        {
            title: "Найди число",
            subtitle: "Тренажер на внимание"
        }
    ],
    statistics: [
        {
            title: "Ваши результаты",
        }
    ]
}

export const infoElements = {
    timer: {
        text: "ВРЕМЯ",
        value: "00:00"
    },
    items: [
        {
            text: "УРОВЕНЬ",
            value: "1-1"
        },
        {
            text: "ОЧКИ",
            value: "0"
        }
    ]
}

export const items = [
    [
        {
            number: 4,
            animation: 'rotate-animation',
            finger: true,
            color: "#c72727"
        },
        {
            number: 4,
            animation: "opacity-animation",
            color: "#ea3838"
        },
        {
            number: 4,
            animation: 'pulse-animation',
            color: "#b41c1c"
        }
    ],
    [
        {
            number: 4,
            animation: "opacity-animation",
            color: "#f37f7f"
        },
        {
            number: 4,
            animation: 'pulse-animation',
            color: "#a84343"
        },
        {
            number: 4,
            animation: 'pulse-animation',
            color: "#a84343"
        }
    ]
]
export const timeForSlideOutField = 300;
export const timeForDisappearGame = {
        enter: 3000,
        exit: 3000,
};
export const timeForShowImageReaction = 500;
export const timeForCountDownInGame = 10; // в секундах

