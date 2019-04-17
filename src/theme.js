import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    typography: {
        useNextVariants: true,
      },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: "red",
        margin: "10px",
        "&:hover": {
          backgroundColor: "green"
        }
      }
    }
  }
});