import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1f2029',
      '700': '#353646',
      '600': '#4b4d63',
      '500': '#616480',
      '400': '#797d9a',
      '300': '#9699b0',
      '200': '#B3B5C6',
      '100': '#D1D2DD',
      '50': '#EEEEF2',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
  // colors: {
  //   transparent: 'transparent',
  //   black: '#000',
  //   white: '#fff',
  //   // gray: {
  //   //   50: '#f7fafc',
  //   //   900: '#171923',
  //   // },
  // },
  // config: { initialColorMode: 'dark', useSystemColorMode: true },
  // styles: {
  //   global: {
  //     fontFamily:
  //       "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
  //   },
  //   body: {
  //     fontFamily:
  //       "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
  //     WebkitFontSmoothing: 'antialiased',
  //     MozOsxFontSmoothing: 'grayscale',
  //   },
  // },
})
