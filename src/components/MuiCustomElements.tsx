
import { Button, FormControl, styled } from "@mui/material";
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#000"
    },
    text: {
      primary: "#ffffff"
    }
  },
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          marginRight: 20,
          overflow: "hidden",
          width: "100%"
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          marginTop: 10
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          alignContent: "center"
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        body: {
          padding: "0 15px"
        },
        // root: {
        //   padding: 15,
        //   display: "flex",
        //   alignItems: "center"
        // }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          overflow: "hidden"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "10px 10px",
          ['@media (max-width:780px)']: {
            width: '80%'
          }
        }
      }
    }
  }
});

export const SidebarButton = styled(Button)(() => ({
  width: "calc(100% - 8px)",
  fontSize: 16,
  fontWeight: 900,
  borderRadius: 5,
  textTransform: "capitalize",
  padding: "10px 15px",
  color: "#fff",
  position: "relative",
  fontFamily: "Open Sans",
  borderBottom: "1px solid #00000052",
  display: "flex",
  justifyContent: "flex-start",
  margin: 4,
  "& span": {
    textAlign: "left",
  },
  "& svg": {
    width: 24,
    marginRight: 20
  },
  "&:disabled": {
    background: "#373737",
    color: "#fff"
  },
}));

export const SearchFormControl = styled(FormControl)(() => ({
  width: 530,
  ['@media (max-width:780px)']: {
    width: 'calc(100% - 40px)'
  }
}));