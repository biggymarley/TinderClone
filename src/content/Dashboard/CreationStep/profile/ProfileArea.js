import { Avatar, Button, IconButton, Slide, Stack, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, fontFamily } from "@mui/system";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SettingsIcon from '@mui/icons-material/Settings';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

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
    <Slide direction="right" in={true}>
    <Box sx={classes.MobileRoot}>
      <Toolbar/>
      <UserAvatarBox />
      <UserInfoBox />
      <UserButtonsBox />
      <Toolbar/>
    </Box>
    </Slide>
  );
};

const UserButtonsBox = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={classes.UserButtonsStack}
    >
      <ButtonFactory />
    </Stack>
  );
};

const ButtonFactory = () => {
  return Buttons.map((button, index) => (
    <Stack direction="column" spacing={1.5} sx={button.position} key={index}>
      <IconButton sx={button.buttonstyle}>{button.Icon}</IconButton>
      <Typography sx={classes.label}>{button.label}</Typography>
    </Stack>
  ));
};

const UserInfoBox = () => {
  return (
    <Stack direction="column" sx={{ zIndex: 1, pt: "2rem" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography sx={classes.userName}>Ayoub</Typography>
        <Typography sx={classes.userAge}>27</Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <LocationOnIcon color="secondary" sx={{ fontSize: "1.6rem" }} />
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
    height:"100%",
    minHeight: "60vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    paddingBottom:"6rem",
    "&::before": {
      content: `''`,
      backgroundColor: "#FFFFFF",
      borderRadius: "0 0 50% 50%",
      height: "100%",
      width: "200%",
      position: "absolute",
      boxShadow:
        "rgb(50 50 93 / 25%) 0px 17px 10px -17px, rgb(0 0 0 / 30%) 0px 19px 0px -38px",
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
    color: "secondary.main",
    lineHeight: "1",

  },
  UserButtonsStack: {
    zIndex: 1,
    pt: "4rem",
    position: "relative",
    width: "80%",
  },
  EditProfileButton: {
    backgroundColor: "#FFFFFF",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    p: ".8rem",
    placeSelf: "center",
  },
  label: {
    fontSize: ".8rem",
    fontFamily: "Nova",
    opacity: ".5",
    letterSpacing: "1px",
    textTransform: "uppercase",
    "@media(max-width:315px)":{
      display:"none"
    }
  },
  EditProfileIcon: {
    fontSize: "1.8rem",
  },
  CameraAltIcon:{
    color:"#FFFFFF"
  },
  SettingsIcon:{}
  
};

const Buttons = [
  {
    label: "Edit profile",
    Icon: <EditRoundedIcon sx={classes.EditProfileIcon} />,
    buttonstyle: {
      backgroundColor: "#FFFFFF !important",
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      p: ".8rem",
      placeSelf: "center",
    },
    position:{
      position:'absolute',
      top:"80px",

    }
  },

  {
    label: "Add Media",
    Icon: <CameraAltIcon sx={classes.CameraAltIcon} />,
    buttonstyle: {
      backgroundColor: "#fe3f61 !important",
      color:"#FFFFFF",
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      p: ".7rem",
      placeSelf: "center",
    },
    position:{
      position:'absolute',
      right:0
    }
  },
  {
    label: "Settings",
    Icon: <SettingsIcon sx={classes.SettingsIcon} />,
    buttonstyle: {
      backgroundColor: "#FFFFFF !important",
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      p: ".7rem",
      placeSelf: "center",
    },
    position:{
      position:'absolute',
      left:0,      
    }
  },
];
