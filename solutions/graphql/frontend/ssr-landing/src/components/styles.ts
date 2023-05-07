import { keyframes } from 'styled-components';

export const colors = {
  red: '#ED3438',
  redDark: '#f12b27',
  redTransp: 'rgba(244, 81, 77, .07)',
  redTranspDark: 'rgba(244, 81, 77, .15)',
  pink: '#FBDADE',
  shadowRed: 'rgba(244, 81, 77, 0.23)',
  shadowBlack: 'rgba(41, 43, 51, 0.26)',
  shadowInput: 'rgba(196, 198, 203, 0.21)',
  shadowPointer: 'rgba(196, 198, 203, 0.26)',
  black: '#111111',
  text: '#32343c',
  textLine: '#42434A',
  textLight: '#535868',
  textSpan: '#606679',
  textSpanDarker: '#4C4F59',
  textDisabled: 'rgba(44, 46, 54, .3)',
  greyContainerBackground: '#F2F3F5',
  blackContainerBackground: '#161618',
  greyText: '#8c8e95',
  greyLight: '#e6e7eb',
  greyLighter: '#efeff1',
  greyTransp: 'rgba(230, 231, 235, .34)',
  grey: '#dcdee1',
  greyDark: '#D8D9DD',
  greyLabel: '#A1A5B4',
  greyDisabled: '#B2B2B2',
  greyDisabledOpacity: 'rgba(178, 178, 178, .3)',
  greyLine: '#d0d1d3',
  greyLineOpacity: 'rgba(208, 209, 211, .5)',
  greyDotted: 'rgba(139, 139, 139, .8)',
  greyOpacity: 'rgba(139, 139, 139, .3)',
  greyBorder: 'rgba(94, 94, 94, .09)',
  greyWhite: '#f3f3f5',
  greyBlue: '#f1f2f4',
  greyNotification: '#AEB2BF',
  greyBlueTransp: 'rgba(126,126,140,0.02)',
  green: '#068C63',
  oldWhite: '#ededf0',
  almostWhite: '#f1f1f4',
  blueishWhite: '#FAFAFB',
  otherWhite: '#F8F8F9',
  error: '#ed0a0f',
  success: '#a2d76b',
  successText: '#4D5E3A',
  successLight: '#d7e8c9',
  hint: '#f3d993',
  hintText: '#53400D',
  hintTextDark: '#3E4339',
  upload: '#f7b500',
  logo: '#231F20',
  background: '#F1F2F5',
  greyGradient: 'linear-gradient(-12deg, #2A2C35 0%, #32343C 100%)',
  redGradient:
    'linear-gradient(-42deg, rgba(227,37,99,1) 0%, rgba(224,35,93,1) 10%, rgba(225,31,79,1) 30%, rgba(231,22,52,1) 70%, rgba(237,10,15,1) 100%);',
  web3: '#FBDADE',
  community: '#EBFEF9',
  education: '#83B6F2',
  // Social
  facebook: '#3B5998',
  twitter: '#1DA1F2',
  google: '#4285F4',
  apple: '#000000',
};

export const size = {
  mobileS: 330,
  mobileM: 400,
  mobileL: 500,
  tablet: 800,
  laptopS: 900,
  laptop: 1220,
  laptopL: 1300,
  laptopML: 1450,
  laptopXL: 1600,
  desktop: 1800,
  desktopL: 2500,
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptopS: `(min-width: ${size.laptopS}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  laptopML: `(min-width: ${size.laptopML}px)`,
  laptopXL: `(min-width: ${size.laptopXL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktopL}px)`,
  iphoneX: 'only screen and (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3)',
  retinaDesktop: `
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: ${size.tablet}px),
    only screen and (min--moz-device-pixel-ratio: 2) and (min-width: ${size.tablet}px),
    only screen and (-o-min-device-pixel-ratio: 2/1) and (min-width: ${size.tablet}px),
    only screen and (min-device-pixel-ratio: 2) and (min-width: ${size.tablet}px),
    only screen and (min-resolution: 192dpi) and (min-width: ${size.tablet}px),
    only screen and (min-resolution: 2dppx) and (min-width: ${size.tablet}px)`,
  retina: `
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx)`,
};

export const typography = {
  super: '100px',
  heroBig: '64px',
  hero: '60px',
  heroTitle: '60px',
  heroMobile: '40px',
  h1Big: '48px',
  h1: '40px',
  h1Small: '32px',
  landingTitle: '30px',
  h2Bigger: '32px',
  h2: '24px',
  h2Small: '20px',
  h3: '16px',
  h4: '14px',
  span: '12px',
  small: '10px',
  sectionTitle: '18px',
};

export const general = {
  borderRadius: '4px',
  paddingBtn: '22px',
  columnWidth: 49, // this is in px
  gutterWidth: 5, // this is in px
  boxShadowRed: `10px 10px 20px 0 ${colors.shadowRed}`,
  boxShadowRedHover: `0px 5px 10px 0 ${colors.shadowRed}`,
  boxShadowBlack: `10px 10px 20px 0 ${colors.shadowBlack}`,
  boxShadowBlackHover: `0px 5px 10px 0 ${colors.shadowBlack}`,
  boxShadowInput: `0 4px 8px 0 ${colors.shadowInput}`,
  boxShadowInputHover: `0 2px 4px 0 ${colors.shadowInput}`,
  boxShadowBlackCircle: `0 7px 13px 0 ${colors.shadowBlack}`,
  boxShadowBlackCircleHover: `0 4px 9px 0 ${colors.shadowBlack}`,
  boxShadowPointer: `-4px -4px 8px 0 ${colors.shadowPointer}`,
  boxShadowPricing: '0 20px 40px 0 rgba(104,112,114,0.22)',
  boxShadowGradient: '0 20px 40px 0 rgba(105,19,21,0.36)',
  boxShadowGradientHover: '0 10px 20px 0 rgba(105,19,21,0.36)',
  boxShadowBlackVideo: `0 0 30px 0 ${colors.shadowBlack}`,
  boxShadowBlackHeader: '0 8px 16px 0 rgba(154,157,165,0.23)',
};

export const transition = {
  duration: '.275s',
  type: 'ease-in-out',
  curve: 'cubic-bezier(0.0, 0.005, 0.2, 1.0)',
};

export const heights = {
  mobileNavbar: '80px',
  navbar: '100px',
};

export const zIndices = {
  modal: 9999,
  dialogs: 9998,
  header: 999,
  underHeader: 998,
  top: 99,
  over: 1,
  normal: 0,
  under: -1,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getWidth = (cols: number) => {
  return `${cols * general.columnWidth + (cols - 1) * general.gutterWidth}px`;
};

export const strokeKeyframes = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

export const opacityKeyframes = keyframes`
  100% {
    opacity: 1;
  }
`;

export const rotateKeyframes = keyframes`
  100% {
    transform: rotate(-45deg);
  }
`;

export const slideInRightKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translate(50%, 0) scale(1.125);
    transition: transform 3s ${transition.type}, opacity ${transition.duration} ${transition.type};
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
`;

export const slideInLeftKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translate(-100%, 0);
    transition: transform ${transition.duration} ${transition.type}, opacity ${transition.duration} ${transition.type};
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const slideInUpKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, -100%);
    transition: transform ${transition.duration} ${transition.type}, opacity ${transition.duration} ${transition.type};
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isMobile = () => document.body.clientWidth <= size.laptopS;
