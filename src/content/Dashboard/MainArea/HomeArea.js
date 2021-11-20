import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
export default function HomeArea() {
  const [pics, setpics] = useState(1);

  const inctement = () => {
    if (pics >= 99) setpics(1);
    else setpics(pics + 1);
  };
  return (
    <Box sx={classes.root}>
      <Box sx={classes.AvailableUserBox}>
        <Box sx={classes.AvailableUserImages}>
          <img
            src={`https://randomuser.me/api/portraits/women/${pics}.jpg`}
            alt="user-gallery"
            style={classes.UserImage}
          />
          <InfoStack />
          <ButtonsStack inctement={inctement} />
          <Box sx={classes.BottomShadow}></Box>
        </Box>
      </Box>
    </Box>
  );
}

const InfoStack = ({ inctement }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={classes.InfoStack}
    >
      <Stack direction="column" spacing={1}>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="span" sx={classes.userName}>
              Name
            </Typography>
            <Typography variant="span" sx={classes.age}>
              26
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <FiberManualRecordIcon
              sx={classes.connectionStatus}
              style={{ color: "#2df187" }}
            />
            <Typography sx={classes.connectionStatus}>
              recently active
            </Typography>
          </Stack>
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <LocationOnOutlinedIcon sx={classes.mailes} />
          <Typography sx={classes.mailes}>121 Kilometres away</Typography>
        </Stack>
      </Stack>
      <IconButton sx={classes.infoButton} onClick={()=>console.log("dd")}>
        <InfoRoundedIcon sx={{fontSize:"2rem"}}/>
      </IconButton>
    </Stack>
  );
};

const ButtonsStack = ({ inctement }) => {
  return (
    <Stack
      direction="row"
      sx={classes.ButtonStack}
      justifyContent="space-evenly"
    >
      <IconButton sx={classes.crossButton} onClick={inctement}>
        <ClearRoundedIcon sx={classes.cross} />
      </IconButton>
      <IconButton sx={classes.hearthButton} onClick={inctement}>
        <FavoriteRoundedIcon sx={classes.hearth} />
      </IconButton>
    </Stack>
  );
};

const classes = {
  root: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
  },
  AvailableUserBox: {
    width: "370px",
    height: "640px",
    borderRadius: "10px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  },
  AvailableUserImages: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    position: "relative",
  },
  UserImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },
  BottomShadow: {
    position: "absolute",
    top: 0,
    borderRadius: "10px",
    width: "100%",
    height: "100%",
    boxShadow: "inset 0px -12rem 5rem -60px #000000",
  },
  ButtonStack: {
    position: "absolute",
    width: "100%",
    bottom: "1rem",
    zIndex: 2,
  },
  InfoStack: {
    position: "absolute",
    width: "100%",
    p: "1rem",
    bottom: "15%",
    zIndex: 3,
    color: "#FFFFFF",
  },
  crossButton: {
    color: "secondary.main",
    border: "1px solid ",
  },
  hearthButton: {
    color: "#21d07c",
    border: "1px solid ",
  },
  cross: {
    color: "secondary.main",
    width: "2.5rem",
    height: "2.5rem",
    transition: "all .2s",
    "&:hover": {
      transform: "scale(1.08)",
    },
  },
  hearth: {
    color: "#21d07c",
    width: "2.5rem",
    height: "2.5rem",
    transition: "all .2s",
  },
  userName: {
    fontFamily: "Nova",
    fontSize: "2rem",
    textTransform: "capitalize",
  },
  age: {
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    fontWeight: 300,
  },
  connectionStatus: {
    fontFamily: "Roboto",
    fontSize: ".9rem",
    fontWeight: 300,
    textTransform: "capitalize",
  },
  mailes: {
    fontFamily: "Nova",
    fontSize: "1.1rem",
    fontWeight: 300,
    opacity: 0.8,
    textTransform: "capitalize",
  },
  infoButton: {
    position: "absolute",
    right: "45px",
    bottom: "6px",
    color: "#FFFFFF",
  },
};
