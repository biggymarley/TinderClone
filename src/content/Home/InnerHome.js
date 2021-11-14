import { Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import React from "react";

export default function InnerHome() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  


  return matches ? <WebRender /> : <MobileRender />;
}


const WebRender = () => {
  return (
    <Box sx={classes.InnerHome}>
      <Stack direction="column" spacing={4} alignItems="center">
        <Typography variant="h1" sx={classes.headTitle}>
          Swipe Right®
        </Typography>
        <Button sx={classes.signUp}>Create Account</Button>
      </Stack>
    </Box>
  );
};
const MobileRender = () => {
  return (
    <Box sx={classes.InnerHome}>
      <Typography variant="h1" sx={classes.MobileheadTitle}>
        Swipe Right®
      </Typography>
      <Stack
        direction="column"
        spacing={4}
        alignItems="center"
        sx={{ width: "80%" }}
      >
        <Button sx={classes.MobilesignUp} fullWidth>
          Create Account
        </Button>
        <Button sx={classes.MobileLogin} fullWidth>
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
  },
  MobilesignUp: {
    background: "#FFFFFF !important",
    color: "#000000",
    minHeight: "55px",
    borderRadius: "12em",
    textTransform: "capitalize",
    fontWeight: "500",
  },
  MobileLogin: {
    background: "transparent",
    color: "#FFFFFF",
    minHeight: "55px",
    borderRadius: "12em",
    outline: "#FFFFFF 2px solid",
    textTransform: "capitalize",
  },
  MobileheadTitle: {
    color: "#FFFFFF",
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: "2px",
    fontSize: "8vw",
    fontStyle: "italic",
  },
};
