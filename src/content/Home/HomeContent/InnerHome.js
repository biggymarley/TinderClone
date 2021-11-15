import { Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { DialogContext } from "./HomeRoot";
export default function InnerHome() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return matches ? <WebRender /> : <MobileRender />;
}

const WebRender = () => {
  const { DialogStatus, setDialogStatus } = useContext(DialogContext);

  return (
    <Box sx={classes.InnerHome}>
      <Stack direction="column" spacing={4} alignItems="center">
        <Typography variant="h1" sx={classes.headTitle}>
          Swipe Right®
        </Typography>
        <Button
          sx={classes.signUp}
          onClick={() => setDialogStatus(!DialogStatus)}
        >
          Create Account
        </Button>
      </Stack>
    </Box>
  );
};
const MobileRender = () => {
  const { DialogStatus, setDialogStatus } = useContext(DialogContext);

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
        <Button
          sx={classes.MobilesignUp}
          fullWidth
          onClick={() => setDialogStatus(!DialogStatus)}
        >
          Create Account
        </Button>
        <Button
          sx={classes.MobileLogin}
          fullWidth
          onClick={() => setDialogStatus(!DialogStatus)}
        >
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
