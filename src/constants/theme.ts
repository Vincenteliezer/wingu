import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";

const fontConfig = {
  fontFamily: "Regular",
};

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    ...DefaultTheme.colors,
    primary: "#3b82f6",
    secondary: "#388E3C",
  },
};
