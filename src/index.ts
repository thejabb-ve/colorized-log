enum color {
    black = 30,
    red = 31,
    green = 32,
    yellow = 33,
    blue = 34,
    magenta = 35,
    cyan = 36,
    white = 37,
    brightBlack = 90,
    brightRed = 91,
    brightGreen = 92,
    brightYellow = 93,
    brightBlue = 94,
    brightMagenta = 95,
    brightCyan = 96,
    brightWhite = 97,
}

enum background {
    black = 40,
    red = 41,
    green = 42,
    yellow = 43,
    blue = 44,
    magenta = 45,
    cyan = 46,
    white = 47,
    brightBlack = 100,
    brightRed = 101,
    brightGreen = 102,
    brightYellow = 103,
    brightBlue = 104,
    brightMagenta = 105,
    brightCyan = 106,
    brightWhite = 107,
}

enum format {
    reset = 0,
    bold = 1,
    faint = 2,
    italic = 3,
    underline = 4,
    blinkingSlow = 5,
    blinkingRapid = 6,
    inverted = 7,
    hidden = 8,
    strikethrough = 9,
}

function getEnum(
    Enum: typeof color | typeof format | typeof background,
    item?: Color | Format
): string | undefined {
    if (!item) return undefined;

    return Enum[item as keyof typeof Enum] as unknown as string;
}

export default function colorizedLog(message: Message): void {
    if (
        typeof message === 'string' ||
        typeof message === 'boolean' ||
        typeof message === 'number'
    )
        return console.log(message);

    const edit: string[] = [];
    const logs: string[] = [];

    message.forEach((item) => {
        edit.push(
            `\x1b[${[
                getEnum(color, item.color),
                getEnum(format, item.format),
                getEnum(background, item.background),
            ]
                .filter(Boolean)
                .join(';')}m%s\x1b[0m`
        );
        logs.push(item.text.toString());
    });

    return console.log(edit.join(' '), ...logs);
}
