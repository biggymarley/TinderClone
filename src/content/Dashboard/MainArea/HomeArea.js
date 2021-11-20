import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
export default function HomeArea() {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.AvailableUserBox}>
        <Box sx={classes.AvailableUserImages}>
          <img
            src="https://picsum.photos/200/300"
            alt="user-gallery"
            style={classes.UserImage}
          />
          <ButtonsStack />
          <Box sx={classes.BottomShadow}></Box>
        </Box>
      </Box>
    </Box>
  );
}

const ButtonsStack = () => {
  return (
    <Stack
      direction="row"
      sx={classes.ButtonStack}
      justifyContent="space-evenly"
    >
      <IconButton sx={classes.crossButton}>
        <ClearRoundedIcon sx={classes.cross} />
      </IconButton>
      <IconButton sx={classes.hearthButton}>
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
    boxShadow: "inset 0px -12rem 5rem -30px #000000",
  },
  ButtonStack: {
    position: "absolute",
    width: "100%",
    bottom: "1rem",
    zIndex: 2,
  },
  crossButton: {
    color: "secondary.main",
    border: "1px solid ",
    borderRadius: "50%",
  },
  hearthButton: {
    color: "#21d07c",
    border: "1px solid ",
    borderRadius: "50%",
  },
  cross: {
    color: "secondary.main",
    fontSize: "3.5rem",
    padding: ".3rem",
    transition: "all .2s ease",
    "&:hover": {
      transform: "scale(1.08)",
    },
  },
  hearth: {
    color: "#21d07c",
    fontSize: "2.5rem !important",
    padding: ".8rem",

    transition: "all .2s ease",
    "&:hover": {
      transform: "scale(1.08)",
    },
  },
};
