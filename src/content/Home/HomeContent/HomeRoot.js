import HomePage from "./HomePage";
import { Box } from "@mui/system";
import Feedbacks from "../Feedbacks/Feedbacks";
import Footer from "../Footer/Footer";
import Motivation from "../Footer/Motivation";
import React, { useState } from "react";
import DialogUser from "./Dialog";
export const DialogContext = React.createContext(false);
export const IndexContext = React.createContext(false);
function HomeRoot() {
  const [DialogStatus, setDialogStatus] = useState(false);
  const [DialogIndex, setDialogIndex] = useState("default");

  const CloseDialog = (e) => {
    setDialogStatus(false);
  };
  const OpenDialog = () => {
    setDialogIndex("default");
    setDialogStatus(true);
  };
  return (
    <DialogContext.Provider value={{ DialogStatus, OpenDialog, CloseDialog }}>
      <IndexContext.Provider value={{ DialogIndex, setDialogIndex }}>
        <div style={{ position: "relative" }}>
          <HomePage />
          <Box sx={classes.sticky}>
            <Feedbacks />
            <Motivation />
          </Box>
        </div>
        <Footer />
        <DialogUser />
      </IndexContext.Provider>
    </DialogContext.Provider>
  );
}

export default HomeRoot;

const classes = {
  sticky: {
    position:
      window.innerHeight >= 700 ? { xs: "static", md: "sticky" } : "static",
    bottom: 0,
    zIndex: -1,
  },
};
