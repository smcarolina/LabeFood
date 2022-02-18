import { createTheme } from "@material-ui/core/styles";
import { secondaryColor, primaryColor } from "./colors";

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "white" 
        },
        
        text: {
            primary: primaryColor
        },
        secondary: {
            main: secondaryColor,
            contrastText: "white" 
        },
        
        text: {
            primary: secondaryColor
        }
    }
});

export default theme;