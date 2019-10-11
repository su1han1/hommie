import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1FB39C",
        },
        secondary: {
            main: "#5485C4",
        },
        background: {
            default: "#fff",
        },
        text: {
            primary: "#4f4f4f",
            secondary: "#fff",
        }
    },
    typography: {
        fontSize: 16,
        h1: {
            fontSize: 40,
            fontWeight: 700,
        },
        h2: {
            fontSize: 36,
            fontWeight: 500,
        },
        h3: {
            fontSize: 24,
            fontWeight: 700,
        },
        h4: {
            fontSize: 20,
            fontWeight: 700,
        },
        h5: {
            fontSize: 18,
            fontWeight: 700,
        },
        h6: {
            fontSize: 12,
            fontWeight: 700,
        },
        body2: {
            fontSize: 20,
        },
    },
});

export default theme;