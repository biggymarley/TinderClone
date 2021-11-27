import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
    <Box sx={classes.MobileRoot}>
      <UserAvatarBox />
      <UserInfoBox />
    </Box>
  );
};

const UserInfoBox = () => {
  return (
    <Stack direction="column" sx={{ zIndex: 1, pt: "2rem" }} >
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
        <Typography sx={classes.userName}>Ayoub</Typography>
        <Typography sx={classes.userAge}>27</Typography>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
        <LocationOnIcon color="secondary" sx={{fontSize: "1.6rem",}}/>
        <Typography sx={classes.userLocation}>Khouribga, morocco</Typography>
      </Stack>
    </Stack>
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
      <CircularProgress
        variant="determinate"
        value={30}
        sx={classes.progressFill}
      />
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
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    "&::before": {
      content: `''`,
      backgroundColor: "#FFFFFF",
      borderRadius: "0 0 50% 50%",
      height: "100%",
      width: "200%",
      position: "absolute",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    },
  },
  UserAvatarBox: {
    position: "relative",
    display: "grid",
    placeItems: "center",
  },
  UserAvatar: {
    width: { xs: "5em", sm: "9em" },
    height: { xs: "5em", sm: "9em" },
    zIndex: "2",
  },
  progress: {
    backgroundColor: "#21262e20",
    position: "absolute",
    width: { xs: "8em", sm: "13em" },
    height: { xs: "8em", sm: "13em" },
    borderRadius: "50%",
  },
  progressPadding: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    width: { xs: "7em", sm: "12em" },
    height: { xs: "7em", sm: "12em" },
    borderRadius: "50%",
    zIndex: "1",
  },
  progressFill: {
    color: "secondary.main",
    position: "absolute",
    "&.MuiCircularProgress-root": {
      width: { xs: "8em !important", sm: "13em !important" },
      height: { xs: "8em !important", sm: "13em !important" },
      transform: "rotate(90deg) !important",
    },
    "& .MuiCircularProgress-circle": {
      strokeWidth: { xs: 2.7, sm: 1.7 },
      r: { xs: "20.65", sm: "21.15" },
    },
    zIndex: 1,
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
  userName: {
    fontFamily: "Nova",
    fontSize: { xs: "1.9rem", sm: "2rem" },
    textTransform: "capitalize",

  },
  userAge: {
    fontFamily: "Roboto",
    fontSize: { xs: "1.5rem", sm: "1.6rem" },
    textTransform: "capitalize",
  },
  userLocation: {
    fontFamily: "Roboto",
    fontSize: ".9rem",
    textTransform: "capitalize",
    color:"secondary.main",
    lineHeight:"1"
  },
};
