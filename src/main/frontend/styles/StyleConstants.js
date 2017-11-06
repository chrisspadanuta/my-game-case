import { style, media } from 'typestyle';

const mobile_device = '900px';
const desktop_device = '901px';

export const MediaQueries = {
  mobile: { maxWidth: mobile_device },
  desktop: { minWidth: desktop_device },
};

export const Colors = {
  bg: {
    darkest: '#111',
    darker: '#222',
    dark: '#333',
    gray: '#999',
    lightgray: '#ccc'
  },
  text: {
    gray: '#777',
    lightgray: '#999',
    offwhite: '#aaa'
  }
};
