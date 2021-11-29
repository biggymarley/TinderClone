import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FixedAppbar } from "./ProfileArea";

const EditMobile = () => {
  return (
    <Box sx={classes.root}>
      <FixedAppbar title="Edit Info"/>
      <Toolbar />
    </Box>
  );
};

const classes = {
  root: {
    minHeight: "100vh",
    backgroundColor: "backgroundGraycolor.main",
  },
};
export default EditMobile;
