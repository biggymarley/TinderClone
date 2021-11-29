import { Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FixedAppbar } from "./ProfileArea";

const SettingsMobile = () => {
  return (
    <Box sx={classes.root}>
      
    <FixedAppbar title="Settings"/>
      <Link to="..">settings</Link>
    </Box>
  );
};

const classes = {
  root: {
    minHeight: "100vh",
    backgroundColor: "backgroundGraycolor.main",
  },
};
export default SettingsMobile;
