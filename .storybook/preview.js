import { createGlobalStyle } from "styled-components";
import { withTheme } from "./withTheme.decorator";
import Style from 'index.css'
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape
      items: [
        { value: "light", title: "Light", left: "🌞" },
        { value: "dark", title: "Dark", left: "🌛" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    ShadowRoot: true,
  },
};

const GlobalStyle = createGlobalStyle`
  ${Style.html};

  .row-elements{
    display:flex;
  }
  
  .row-elements > * {
    margin:8px;
  }
`;

const withGlobalStyle = (Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
);

export const decorators = [withGlobalStyle, withTheme];
