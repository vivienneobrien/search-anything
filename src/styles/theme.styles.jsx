import { createTheme } from "@material-ui/core/styles";

const appBlue = "#0B72B9";
const appOrange = "#FFBA60";

export default createTheme({
  palette: {
    common: {
      appBlue: `${appBlue}`,
      appOrange: `${appOrange}`,
    },
    primary: {
      main: `${appBlue}`,
    },
    secondary: {
      main: `${appOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
  },
});
