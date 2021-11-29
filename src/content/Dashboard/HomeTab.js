import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Slide } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import React from "react";
import Matches from "./matches/Matches";
import Messages from "./messages/Messages";

export const HomeTab = () => {
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
            aria-label="tab"
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

const classes = {
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
};
