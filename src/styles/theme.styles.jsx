import { createTheme } from "@material-ui/core/styles"

const inspireBlue = "#0B72B9"
const inspireOrange = "#FFBA60"

export default createTheme({
    palette: {
        common: {
            inspireBlue: `${inspireBlue}`,
            inspireOrange: `${inspireOrange}`
        },
        primary: {
            main: `${inspireBlue}`
        },
        secondary: {
            main: `${inspireOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem"
            }
    }
})