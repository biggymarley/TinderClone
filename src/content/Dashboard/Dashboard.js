import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProfileArea from "./CreationStep/profile/ProfileArea";
import HomeArea from "./MainArea/HomeArea";
import Matches from "./matches/Matches";
import Messages from "./messages/Messages";
import TopAppbar, { BottomAppbar } from "./MobileAppbars/MobileAppbars";
import DraweHeader from "./WebDrawer/DrawerHeader";
import HeaderTab from "./WebDrawer/HeaderTab";
export default function Dashboard() {
  const location = useLocation();
  const [TabsIndex, setTabsIndex] = useState(
    location?.pathname?.search("profile") ? "ProfileTab" : "MainTab"
  );

  return (
    <Box sx={{ display: "flex", overflow: "hidden" }}>
      <HandleRander TabsIndex={TabsIndex} setTabsIndex={setTabsIndex} />
      <Box component="main" sx={classes.main}>
        <MainTab TabsIndex={TabsIndex} />
      </Box>
    </Box>
  );
}

const HandleRander = ({ setTabsIndex, TabsIndex }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const drawerWidth = 375;

  return matches ? (
    <Drawer
      sx={{
        width: drawerWidth,
        display: { xs: "none", md: "block" },
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          overflow: "hidden",
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <DraweHeader TabsIndex={TabsIndex} setTabsIndex={setTabsIndex} />
      <HeaderTab value={TabsIndex} />
    </Drawer>
  ) : (
    <MobileAppbarsRander TabsIndex={TabsIndex} setTabsIndex={setTabsIndex} />
  );
};

const MobileAppbarsRander = ({ setTabsIndex }) => {
  return (
    <>
      <TopAppbar />
      <BottomAppbar setTabsIndex={setTabsIndex} />
    </>
  );
};

const MainTab = ({ TabsIndex }) => {
  return (
    <Routes>
      <Route path="/" element={<HomeArea TabsIndex={TabsIndex} />} />
      <Route
        path="/profile/*"
        element={<ProfileArea TabsIndex={TabsIndex} />}
      />
      <Route
        path="/messages"
        element={
          <Box sx={classes.MobileTabs}>
            <Messages />
          </Box>
        }
      />
      <Route
        path="/matches"
        element={
          <Box sx={classes.MobileTabs}>
            <Matches />
          </Box>
        }
      />
    </Routes>
  );
};

const classes = {
  main: {
    flexGrow: 1,
    bgcolor: "#f0f2f4",
    my: { xs: "50px", md: "0" },
    minHeight: { xs: "calc(100vh - 100px)", md: "100vh" },
  },
  tablist: {
    marginLeft: ".5rem",
    "& .MuiTabs-indicator": {
      height: "4px",
      borderRadius: "12em",
    },
  },
  Logo: {
    width: { xs: "30px", md: "39.936px" },
    height: { xs: "40px", md: "52.97355px" },
    color: "secondary.main",
  },
  MobileTabs: {
    minHeight: "100%",
    backgroundColor: "#FFFFFF",
  },
};
