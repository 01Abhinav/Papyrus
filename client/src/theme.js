import { createTheme } from "@mui/material/styles";

import { orange } from "@mui/material/colors";

export default createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      light: "#8FE3CF",
      main: "#002B5B",
      dark: "#2B4865",
    },

    secondary: {
      light: "#2e42db",
      main: "#0013a1",
      dark: "#1b2ba8",
    },
    common: {
      white: "#fff",
    },

  },
});
