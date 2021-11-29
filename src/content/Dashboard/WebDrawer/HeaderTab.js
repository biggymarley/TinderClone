import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Slide } from "@mui/material";
import React from "react";
import ProfileTab from "../profile/ProfileTab";
import { HomeTab } from "../HomeTab";
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



export default HeaderTab;