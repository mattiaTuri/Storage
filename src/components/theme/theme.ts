import { createTheme } from "@mui/material/styles";

export const light = createTheme({
    palette: {
      background: {
        default: "#f4f4f7",
        paper: "#ffff",
      },
      text: {
        primary: "#474862",
        secondary: "#ffff", //Input bg color
      },
      primary: {
        main: "#efa135", //Primary color (button and h1 txt)
      },
      secondary: {
        main: "#474862", //Icon color
      },
      divider: "#0000001fe",
    },
  });

export const dark = createTheme({
    palette: {
      background: {
        default: "#121212",
        paper: "#262626",
      },
      text: {
        primary: "#ffff",
        secondary: "#434343", //Input bg color
      },
      primary: {
        main: "#0066ff", //Primary color (button and h1 txt)
      },
      secondary: {
        main: "#ffff", //Icon color
      },
      divider: "#c4c4c4",
    },
  });
