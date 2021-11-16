import { Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useRef } from "react";
import { DialogContext } from "./HomeRoot";

export default function InnerHome() {
  const opacityRef = useRef(undefined);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return matches ? <WebRender opacityRef={opacityRef} /> : <MobileRender />;
}

const WebRender = ({ opacityRef }) => {
  const { OpenDialog } = useContext(DialogContext);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (opacityRef && opacityRef.current !== null) {
        if (window.scrollY === 0) opacityRef.current.style.opacity = 1;
        else if (window.scrollY > opacityRef.current.clientHeight / 2)
          opacityRef.current.style.opacity = 0;
        else opacityRef.current.style.opacity = 1 / (window.scrollY / 50);
      }
    });
  }, [opacityRef]);
  return (
    <Box sx={classes.InnerHome} ref={opacityRef}>
      <Stack direction="column" spacing={4} alignItems="center">
        <Typography variant="h1" sx={classes.headTitle}>
          Swipe Right<sup>®</sup>
        </Typography>
        <Button sx={classes.signUp} onClick={OpenDialog}>
          Create Account
        </Button>
      </Stack>
    </Box>
  );
};
const MobileRender = () => {
  const { OpenDialog } = useContext(DialogContext);
  return (
    <Box sx={classes.InnerHome}>
      <Typography variant="h1" sx={classes.MobileheadTitle}>
        Swipe Right<sup>®</sup>
      </Typography>
      <Stack
        direction="column"
        spacing={4}
        alignItems="center"
        sx={{ width: "80%" }}
      >
        <Button sx={classes.MobilesignUp} fullWidth onClick={OpenDialog}>
          Create Account
        </Button>
        <Button sx={classes.MobileLogin} fullWidth onClick={OpenDialog}>
          Login
        </Button>
      </Stack>
    </Box>
  );
};

const classes = {
  InnerHome: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    position: "absolute",
    width: "100%",
    top: 0,
    bottom: 0,
  },
  headTitle: {
    color: "#FFFFFF",
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: "2px",
    fontWeight: "900",
  },

  signUp: {
    background: "linear-gradient(225deg,#ff6036,#fd267a)",
    "&:hover": {
      background: "linear-gradient(225deg,#fd267a,#ff6036)",
    },
    color: "#FFFFFF",
    width: "315px",
    minHeight: "55px",
    borderRadius: "12em",
    fontWeight: "600",
  },
  MobilesignUp: {
    background: "#FFFFFF !important",
    color: "#000000",

    minHeight: "55px",
    borderRadius: "12em",
    textTransform: "capitalize",
    fontWeight: "600",
  },
  MobileLogin: {
    background: "transparent",
    color: "#FFFFFF",
    minHeight: "55px",
    borderRadius: "12em",
    border: "#FFFFFF 2px solid",
    textTransform: "capitalize",
    fontWeight: "600",
  },
  MobileheadTitle: {
    color: "#FFFFFF",
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: "2px",
    fontSize: "8vw",
    fontStyle: "italic",
  },
};
