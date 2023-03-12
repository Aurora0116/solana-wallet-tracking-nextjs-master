import React from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { SearchFormControl } from "./MuiCustomElements";

// import {
//     WalletModalProvider,
//     WalletMultiButton,
// } from "@solana/wallet-adapter-react-ui";

interface Props {
  drawerWidth: number;
  handleDrawerToggle: () => void;
  handlerSearchAddress: (address: string) => void;
}

const PageAppBar = (props: Props) => {
  const router = useRouter();
  const [searchaddress, setSerachAddress] = React.useState("");
  const handleChange = (value: string) => {
    setSerachAddress(value);
  };
  const handleEnter = (e: any) => {
    if (e.key = "Enter") {
      props.handlerSearchAddress(searchaddress)
    }
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        {/* <SearchFormControl variant="filled">
          <OutlinedInput
            placeholder="Search address, token"
            value={searchaddress}
            onKeyDown={(e) => handleEnter(e)}
            onChange={(e) => handleChange(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => props.handlerSearchAddress(searchaddress)} size="small" >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </SearchFormControl> */}
        {/* <div className="multi-wrapper">
              <span className="button-wrapper">
                  <WalletModalProvider>
                      <WalletMultiButton />
                  </WalletModalProvider>
              </span>
          </div> */}
      </Toolbar>
    </AppBar>
  );
};

export default PageAppBar;
