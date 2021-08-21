import DefaultTheme from "./default";

const DarkTheme: typeof DefaultTheme = {
  global: {
    background: { color: "#000000" },
    border: { color: "#fefefe" },
  },
  copy: {
    header: { color: "#ffffff" },
    paragraph: { color: "#ffffff" },
  },
  buttons: {
    themeSwitcher: {
      color: "#ffffff",
    },
  },
};

export default DarkTheme;
