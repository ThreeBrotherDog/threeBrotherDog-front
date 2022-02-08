const URL = 'http://localhost:3000';

const responsiveView = {
  HDPC: '1200px',
  PC: '980px',
  TABLET: '768px',
  MOBILE: '480px',
};

export const lightTheme = {
  PUBLIC_WHITE: '#fff',
  PUBLIC_BLACK: '#212121',
  BORDER_RADIUS: '6px',
  BACKGROUND_COLOR: '#f4f4f4',
  PUBLIC_PURPLE: '#9082FF',
  PUBLIC_BLUE: '#1C00FF',
  HIGHLIGHT_COLOR: '#fe864D',
  SUB_TITLE_OR_BODY_COLOR: '#666666',
  ICON_COLOR: '#9e9e9e',
};

export type ThemeType = typeof lightTheme;
