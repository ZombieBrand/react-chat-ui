import { ThemeProvider } from "styled-components";
import theme from "../src/theme";

export const withTheme = (Story, content) => {
  console.log({ content });
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};
