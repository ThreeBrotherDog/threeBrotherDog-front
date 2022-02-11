import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    PUBLIC_BLACK: string;
    PUBLIC_WHITE: string;
    BORDER_RADIUS: string;
    BACKGROUND_COLOR: string;
    PUBLIC_PURPLE: string;
    PUBLIC_BLUE: string;
    HIGHLIGHT_COLOR: string;
    SUB_TITLE_OR_BODY_COLOR: string;
    ICON_COLOR: string;
  }
}
