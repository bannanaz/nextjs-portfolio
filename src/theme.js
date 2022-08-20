import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#fc4046",
    },
    error: {
      main: red.A400,
    },
    contrast: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: 50,
      fontWeight: 700,
      color: "#212121",
    },
    h2: {
      fontSize: 19,
      paddingTop: 10,
      fontWeight: 600,
      color: "#212121",
    },
    h3: {
      fontSize: 26,
      fontWeight: 600,
      color: "#212121",
    },
    h4: {
      fontSize: 16,
      fontWeight: 600,
      color: "#212121",
    },
    h4: {
      fontSize: 18,
      fontWeight: 600,
      color: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontSize: 17,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          borderRadius: "5px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          backgroundColor: "#eeeeee",
          margin: 0,
          paddingLeft: 0,
          left: 0,
          bottom: -25,
          position: "absolute",
          zIndex: 1,
        },
      },
    },
  },
});

export default theme;
