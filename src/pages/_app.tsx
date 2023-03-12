import React, { useMemo, useState } from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import "../styles/globals.css";
import "../styles/App.css";
import { ThemeProvider } from '@mui/material/styles';
import PageAppBar from "components/PageAppBar";
import SideBar from "components/SideBar";
import { darkTheme } from "components/MuiCustomElements";

// const SOLANA_NETWORK = WalletAdapterNetwork.Mainnet;
const SOLANA_NETWORK = WalletAdapterNetwork.Mainnet;
const network = SOLANA_NETWORK;

// set custom RPC server endpoint for the final website
// const endpoint = "https://explorer-api.devnet.solana.com";
// const endpoint = "http://127.0.0.1:8899";

const WalletProvider = dynamic(
  () => import("../contexts/ClientWalletProvider"),
  {
    ssr: false,
  }
);

const drawerWidth = 240;

function MyApp({ Component, pageProps }: AppProps) {
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const [searchAddress, setSearchAddress] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handlerSearchAddress = (address: string) => {
    setSearchAddress(address);
  };

  return (
    <ConnectionProvider endpoint={endpoint}>
        <ThemeProvider theme={darkTheme}>
          <PageAppBar
            drawerWidth={drawerWidth}
            handleDrawerToggle={handleDrawerToggle}
            handlerSearchAddress={(e) => handlerSearchAddress(e)}
          />
          <SideBar
            drawerWidth={drawerWidth}
            mobileOpen={mobileOpen}
            searchAddress={searchAddress}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Component {...pageProps}
            searchAddress={searchAddress}
          />
        </ThemeProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
