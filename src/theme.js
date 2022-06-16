import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FF9800",
        },
        secondary: {
            main: "#0098FF",
        },
        gradient:{
            main: "linear-gradient(115deg,#4CD174 16%,#6DB8F2 84%)"
        }
    },
});

export default theme;