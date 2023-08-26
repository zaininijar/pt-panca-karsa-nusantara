import { extendTheme } from "@chakra-ui/react";
import { config } from "./config";
import { foundations } from "./foundations";
import { components } from "./components";

export const theme = extendTheme({
  config,
  ...foundations,
  components,
  styles: {
    global: {
      body: {
        bg: "#fff",
        color: "#00344F",
      },
    },
  },
  fonts: {
    heading: `'Sora Variable', sans-serif`,
    body: `'Sora Variable', sans-serif`,
  },
  colors: {
    primary: {
      50: '#FDE8E9',
      100: '#FBD2D3',
      150: '#FABBBD',
      200: '#F8A4A7',
      300: '#F4777C',
      400: '#F14900',
      500: '#ED1C24',
      600: '#BE161D',
      700: '#8E1116',
      800: '#5F0B0E',
      850: '#47080B',
      900: '#2F0607',
    },
    secondary: {
      50: '#E6EBED',
      100: '#CCD6DC',
      150: '#B3C2CA',
      200: '#99AEB9',
      300: '#668595',
      400: '#335D72',
      500: '#00344F',
      600: '#002A3F',
      700: '#001F2F',
      800: '#001520',
      850: '#001018',
      900: '#000A10',
    },
    tertiary: {
      50: '#F6F6F4',
      100: '#EEEDE9',
      150: '#E5E5DE',
      200: '#DDDCD3',
      300: '#CBCABC',
      400: '#BAB9A6',
      500: '#A9A790',
      600: '#878673',
      700: '#656456',
      800: '#44433A',
      850: '#33322B',
      900: '#22211D',
    },
    neutral: {
      50: '#F0F0F0',
      100: '#E1E1E1',
      150: '#D3D3D3',
      200: '#C4C4C4',
      300: '#A6A6A6',
      400: '#898989',
      500: '#6B6B6B',
      600: '#565656',
      700: '#404040',
      800: '#2B2B2B',
      850: '#202020',
      900: '#151515',
    },
  },
});
