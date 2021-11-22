import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Tab from "@mui/material/Tab";
import Toolbar from "@mui/material/Toolbar";
import React, { useContext, useState } from "react";
import { LogginContext } from "../../App";
import {
  Logo,
  MessageIcon,
  MatchesIcon,
} from "../Home/ContentFactory/IconFactory";
import HomeArea from "./MainArea/HomeArea";
import ProfileArea from "./MainArea/ProfileArea";
import Matches from "./matches/Matches";
import Messages from "./messages/Messages";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Dashboard() {
  const drawerWidth = 375;
  const [TabsIndex, setTabsIndex] = useState("MainTab");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ display: "flex", overflow: "hidden" }}>
      {matches ? (
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
        <MobileRander TabsIndex={TabsIndex} setTabsIndex={setTabsIndex}/>
      )}

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#f0f2f4", my: { xs: "50px", md: "0" } }}
      >
        <MainTab TabsIndex={TabsIndex} />
      </Box>
    </Box>
  );
}

const MobileRander = ({ setTabsIndex }) => {
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ top: 0, bottom: "auto", backgroundColor: "#FFFFFF" }}
      >
        <Toolbar variant="dense">
          <Box>
            <IconButton
              onClick={() => setTabsIndex("ProfileTab")}
              sx={classes.UserButton}
              style={{ width: 35, height: 35 }}
            >
              <Avatar
                alt="profile-pic"
                src="https://picsum.photos/200/300"
                sx={{ width: 35, height: 35 }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Logo sx={classes.Logo} />
            <Typography sx={classes.LogoName}>matcha</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ top: "auto", bottom: 0, backgroundColor: "#FFFFFF" }}
      >
        <Toolbar
          variant="dense"
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <IconButton onClick={() => setTabsIndex("MainTab")}>
            <Logo sx={{ color: "#00000020", fontSize: "2rem" }} />
          </IconButton>
          <IconButton onClick={() => setTabsIndex("MainTab")}>
            <MatchesIcon sx={{ color: "#00000020", fontSize: "2rem" }} />
          </IconButton>
          <IconButton onClick={() => setTabsIndex("MainTab")}>
            <MessageIcon sx={{ color: "#00000020", fontSize: "2rem" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

const MainTab = ({ TabsIndex }) => {
  return (
    <TabContext
      value={TabsIndex}
      textColor="secondary"
      indicatorColor="secondary"
    >
      <Slide direction="right" in={TabsIndex === "MainTab"}>
        <TabPanel value="MainTab" sx={{ padding: "0 !important" }}>
          <HomeArea TabsIndex={TabsIndex} />
        </TabPanel>
      </Slide>
      <Slide direction="left" in={TabsIndex === "ProfileTab"}>
        <TabPanel value="ProfileTab" sx={{ padding: "0 !important" }}>
          <ProfileArea TabsIndex={TabsIndex} />
        </TabPanel>
      </Slide>
    </TabContext>
  );
};

function HeaderTab({ value }) {
  return (
    <TabContext value={value} textColor="secondary" indicatorColor="secondary">
      <Slide direction="right" in={value === "MainTab"}>
        <TabPanel value="MainTab" sx={{ padding: "0 !important" }}>
          <HomeTab />
        </TabPanel>
      </Slide>
      <Slide direction="left" in={value === "ProfileTab"}>
        <TabPanel value="ProfileTab" sx={{ padding: "0 !important" }}>
          <ProfileTab />
        </TabPanel>
      </Slide>
    </TabContext>
  );
}

const HomeTab = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext
        value={value}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={classes.tablist}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Matches" value="1" sx={classes.label} disableRipple />
            <Tab label="Messages" value="2" sx={classes.label} disableRipple />
          </TabList>
        </Box>
        <Slide direction="right" in={value === "1"}>
          <TabPanel value="1">
            <Matches />
          </TabPanel>
        </Slide>
        <Slide direction="left" in={value === "2"}>
          <TabPanel value="2">
            <Messages />
          </TabPanel>
        </Slide>
      </TabContext>
    </Box>
  );
};

const ProfileTab = () => {
  return <Box>Hello</Box>;
};

const DraweHeader = ({ TabsIndex, setTabsIndex }) => {
  const { setIslogged } = useContext(LogginContext);

  return (
    <Toolbar sx={classes.HeaderRoot}>
      <Box sx={{ flexGrow: 1 }}>
        <Button
          onClick={() => setTabsIndex("ProfileTab")}
          sx={classes.UserButton}
          startIcon={
            <Avatar
              alt="profile-pic"
              src="https://picsum.photos/200/300"
              sx={{ width: 35, height: 35 }}
            />
          }
        >
          <Typography sx={classes.userName}>Biggy</Typography>
        </Button>
      </Box>
      <Stack direction="row" spacing={1}>
        {TabsIndex === "ProfileTab" ? (
          <IconButton
            sx={classes.logoutButton}
            onClick={() => setTabsIndex("MainTab")}
          >
            <Logo sx={{ color: "#FFFFFF", fontSize: "1.5rem" }} />
          </IconButton>
        ) : (
          <></>
        )}

        <IconButton
          sx={classes.logoutButton}
          onClick={() => setIslogged(false)}
        >
          <PowerSettingsNewIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
      </Stack>
    </Toolbar>
  );
};

const classes = {
  HeaderRoot: {
    background: "linear-gradient(225deg,#ff6036,#fd267a)",
    height: { xs: "60px", lg: "73px" },
    px: ".5rem !important",
  },

  userName: {
    color: "#FFFFFF",
    fontFamily: "Nova",
    letterSpacing: "1px",
    fontSize: "1rem",
    textTransform: "capitalize",
  },
  UserButton: {
    color: "#000000",
    borderRadius: "12em",
  },
  logoutButton: {
    backgroundColor: "#00000020",
  },
  label: {
    color: "#000000 !important",
    fontFamily: "Nova",
    paddingBottom: 0,
    textTransform: "capitalize",
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
  LogoName: {
    fontFamily: "Gotham",
    fontSize: { xs: "1.5rem", md: "2.4rem" },
    letterSpacing: "-1px",
    color: "secondary.main",
  },
};
