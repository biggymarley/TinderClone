import {  Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FixedAppbar } from "./ProfileArea";
import { Stepper } from "../CreationStep/CreationStepper";
const EditMobile = () => {
  return (
    <Box sx={classes.root}>
      <FixedAppbar title="Edit Info"/>
      <Toolbar />
      <Stepper/>
    </Box>
  );
};

const classes = {
  root: {
    minHeight: "100vh",
    height:"100%",
    // backgroundColor: "backgroundGraycolor.main",
  },
};
export default EditMobile;
