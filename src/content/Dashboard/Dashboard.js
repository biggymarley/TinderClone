import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Avatar, Button, IconButton, Slide, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Tab from "@mui/material/Tab";
import Toolbar from "@mui/material/Toolbar";
import React, { useContext } from "react";
import { LogginContext } from "../../App";
const drawerWidth = 375;

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <DraweHeader />
        <MainTab />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#f0f2f4", minHeight: "100vh" }}
      >
        {/* <CreationStepper /> */}
      </Box>
    </Box>
  );
}

function MainTab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1",overflow:"hidden" }}>
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
          <TabPanel value="1">Matches</TabPanel>
        </Slide>
        <Slide direction="left" in={value === "2"}>
        <TabPanel value="2">Messages</TabPanel>
        </Slide>
      </TabContext>
    </Box>
  );
}

const DraweHeader = () => {
  const { setIslogged } = useContext(LogginContext);

  return (
    <Toolbar sx={classes.HeaderRoot}>
      <Box sx={{ flexGrow: 1 }}>
        <Button
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
      <IconButton sx={classes.logoutButton} onClick={() => setIslogged(false)}>
        <PowerSettingsNewIcon sx={{ color: "#FFFFFF" }} />
      </IconButton>
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
  },
  tablist: {
      marginLeft:".5rem",
    "& .MuiTabs-indicator": {
      height: "4px",
      borderRadius: "12em",
    },
  },
};
