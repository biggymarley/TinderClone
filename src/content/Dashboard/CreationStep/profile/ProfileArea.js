import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import { Avatar, Button } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

export default function ProfileArea() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return <div>{matches ? <WebRender /> : <MobileRender />}</div>;
}

const WebRender = () => {
  return <div>web</div>;
};

const MobileRender = () => {
  return (
    <div style={classes.MobileRoot}>
      <UserAvatarBox />
    </div>
  );
};

const UserAvatarBox = () => {
  return (
    <Box sx={classes.UserAvatarBox}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/58108317?v=4"
        sx={classes.UserAvatar}
      />
      <Box sx={classes.progressPadding} />
      <Box sx={classes.progress} />
      <Box sx={classes.progressFill} />
      <Button sx={classes.Completed} variant="contained">
        30% Complete
      </Button>
    </Box>
  );
};

const classes = {
  MobileRoot: {
    width: "100%",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  UserAvatarBox: {
    position: "relative",
    display: "grid",
    placeItems: "center",
  },
  UserAvatar: {
    width: { xs: "5em", sm: "9em" },
    height: { xs: "5em", sm: "9em" },
    zIndex: "2"
  },
  progress: {
    backgroundColor: "#21262e40",
    position: "absolute",
    width: { xs: "5em", sm: "13em" },
    height: { xs: "5em", sm: "13em" },
    borderRadius: "50%",
  },
  progressPadding: {
    backgroundColor: "#f0f2f4",
    position: "absolute",
    width: { xs: "5em", sm: "12em" },
    height: { xs: "5em", sm: "12em" },
    borderRadius: "50%",
    zIndex: "1",
  },
  progressFill: {
    backgroundColor: "#fe3f61",
    borderRadius: "50%",
    position: "absolute",
    width: { xs: "5em", sm: "13em" },
    height: { xs: "5em", sm: "13em" },
  },
  Completed: {
    color: "#FFFFFF",
    background: "linear-gradient(225deg,#ff6036,#fd267a)",
    borderRadius: "2em",
    fontWeight: 300,
    px: { xs: "1rem", sm: "1.5rem" },
    py: { xs: ".5rem", sm: ".7rem" },
    fontSize: { xs: ".7rem", sm: ".8rem" },
    lineHeight: "1",
    position: "absolute",
    bottom: "-15px",
    whiteSpace: "pre",
    zIndex: "3",
  },
};
