import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "7px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          "& fieldset": {
            borderRadius: "10px",
            borderImage: "linear-gradient(90deg, #4f5f2f, #5a6b34) 1",
          },
        },
      },
    },
  },
});
