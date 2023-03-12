import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import SettingIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { SidebarButton } from "./MuiCustomElements";

interface Props {
  drawerWidth: number;
  mobileOpen: boolean;
  searchAddress: string;
  handleDrawerToggle: () => void;
}

const SideBar = (props: Props) => {
  const router = useRouter();
  const handleRouter = (url: string) => {
    if (props.searchAddress !== undefined) {
      router.push(`${url}`)
    } else {
      router.push(`${url}`)
    }
  }

  useEffect(() => {
    if (router.pathname === "/") router.push("/defi");
  }, [router.pathname])

  const drawer = (
    <>
      <Toolbar><h4>Blockchain Explorer</h4></Toolbar>
      <Divider />
      <SidebarButton onClick={() => handleRouter("/defi")} disabled={router.pathname === "/defi"}>
        <DashboardIcon />
        <span>DEFI</span>
      </SidebarButton>
      <SidebarButton onClick={() => router.push('/nfts', undefined, { shallow: true })} disabled={router.pathname === "/nfts"}>
        <SettingIcon />
        <span>NFTs</span>
      </SidebarButton>
    </>
  );

  return (
    <div className="side-bar">
      <Drawer
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </div>
  );
};

export default SideBar;
