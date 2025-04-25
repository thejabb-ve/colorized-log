export {};

declare global {
    type Color =
        | 'black'
        | 'red'
        | 'green'
        | 'yellow'
        | 'blue'
        | 'magenta'
        | 'cyan'
        | 'white'
        | 'brightBlack'
        | 'brightRed'
        | 'brightGreen'
        | 'brightYellow'
        | 'brightBlue'
        | 'brightMagenta'
        | 'brightCyan'
        | 'brightWhite';

    type Format =
        | 'reset'
        | 'bold'
        | 'faint'
        | 'italic'
        | 'underline'
        | 'blinkingSlow'
        | 'blinkingRapid'
        | 'inverted'
        | 'hidden'
        | 'strikethrough';

    type Message =
        | {
              text: string | number | boolean;
              color?: Color;
              format?: Format;
              background?: Color;
          }[]
        | string
        | number
        | boolean;
}
