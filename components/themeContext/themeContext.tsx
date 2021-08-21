import React, { useState } from "react";
import DefaultTheme from "../../styles/themes/default";
import { ThemeProvider } from "styled-components";

interface IThemeContext {
  setTheme: (theme: typeof DefaultTheme) => void;
  theme: typeof DefaultTheme;
}

const ThemeContext = React.createContext<IThemeContext>({
  setTheme: () => null,
  theme: DefaultTheme,
});

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<typeof DefaultTheme>(DefaultTheme);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: (theme) => setTheme(theme) }}
    >
      {" "}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
export { ThemeContext };
