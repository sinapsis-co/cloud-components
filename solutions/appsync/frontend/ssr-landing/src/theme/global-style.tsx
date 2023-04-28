import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Urbane-Bold';
  src: url('../../fonts/Urbane-Bold.woff2') format('woff2'),
    url('../../fonts/Urbane-Bold.woff') format('woff'),
    url('../../fonts/Urbane-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Urbane-DemiBold';
  src: url('../../fonts/Urbane-DemiBold.woff2') format('woff2'),
    url('../../fonts/Urbane-DemiBold.woff') format('woff'),
    url('../../fonts/Urbane-DemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Urbane-Medium';
  src: url('../../fonts/Urbane-Medium.woff2') format('woff2'),
    url('../../fonts/Urbane-Medium.woff') format('woff'),
    url('../../fonts/Urbane-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Urbane-Light';
  src: url('../../fonts/Urbane-Light.woff2') format('woff2'),
    url('../../fonts/Urbane-Light.woff') format('woff'),
    url('../../fonts/Urbane-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}

  @font-face {
    font-family: 'Everett-Regular';
    src:  
      url('../../fonts/TWKEverett-Regular-web.woff') format('woff'),
      url('../../fonts/TWKEverett-Regular-web.woff2') format('woff2'),
      url('../../fonts/TWKEverett-Regular-web.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Everett-Medium';
    src:  
      url('../../fonts/TWKEverett-Medium-web.woff') format('woff'),
      url('../../fonts/TWKEverett-Medium-web.woff2') format('woff2'),
      url('../../fonts/TWKEverett-Medium-web.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Everett-Bold';
    src:  
      url('../../fonts/TWKEverett-Bold-web.woff') format('woff'),
      url('../../fonts/TWKEverett-Bold-web.woff2') format('woff2'),
      url('../../fonts/TWKEverett-Bold-web.ttf') format('truetype');
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: white;
    color: #32343c;
    font-size: 16px;
    font: 400 16px 'Inter', sans-serif;
    font-family: 'Inter', sans-serif;
    text-rendering: geometricPrecision;
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
    font-weight: normal;
    min-width: 320px;
    margin: 0;
    padding: 0;
    font-stretch: normal;
    font-style: normal;
    overscroll-behavior-y: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    position: relative;
  }

  button,
  input,
  select,
  textarea {
    -webkit-appearance: none;
    filter: none;
    border: none;
    outline: none;
    font-family: 'Inter', sans-serif;
  }

  button:focus,
  input:focus {
    outline: none;
  }

  ::selection {
    background: #111111;
    color: #ffffff;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
  #root, #__next {
    isolation: isolate;
  }
`;
