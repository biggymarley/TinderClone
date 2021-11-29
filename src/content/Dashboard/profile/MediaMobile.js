import { Link, Stack, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FixedAppbar } from "./ProfileArea";
import gallery from "../../../assets/imgs/gallery.svg";
import camera from "../../../assets/imgs/camera.svg";

import PhotoIcon from "@mui/icons-material/Photo";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
const MediaMobile = () => {
  return (
    <Box sx={classes.root}>
      <FixedAppbar title="Media" noBar={true} />
      <Toolbar />
      <Box sx={classes.innerContent}>
        <TitleHead />
        <Stack  direction="column" spacing={2}>
        <GalleryBoxButton />
        <CameraBoxButton/>
        </Stack>
      </Box>
    </Box>
  );
};
const TitleHead = () => {
  return (
    <>
      <Typography sx={classes.title}>Create New</Typography>
      <Typography sx={classes.subtitle}>Select a content type</Typography>
    </>
  );
};

const GalleryBoxButton = () => {
  return (
    <Box sx={classes.GalleryBoxButton}>
      <Stack
        direction="column"
        alignItems="start"
        justifyContent="center"
        sx={classes.StackButton}
      >
        <Typography sx={classes.Stacksubtitle} style={{ padding: 0 }}>
          Upload from
        </Typography>
        <Typography sx={classes.Stacktitle}>Gallery</Typography>
      </Stack>
      <PhotoIcon sx={classes.Icon} />
    </Box>
  );
};

const CameraBoxButton = () => {
    return (
      <Box sx={classes.CameraBoxButton}>
        <Stack
          direction="column"
          alignItems="start"
          justifyContent="center"
          sx={classes.StackButton}
        >
          <Typography sx={classes.Stacksubtitle} style={{ padding: 0 }}>
            Capture from
          </Typography>
          <Typography sx={classes.Stacktitle}>Camera</Typography>
        </Stack>
        <PhotoCameraIcon sx={classes.Icon} />
      </Box>
    );
  };
  

const classes = {
  root: {
    minHeight: "100vh",
  },
  innerContent: {
    px: "min(10vw, 1rem)",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: 400,
  },
  subtitle: {
    fontSize: "1rem",
    fontWeight: 300,
    paddingBottom: "2rem",
  },
  Stacktitle: {
    fontSize: "1.8rem",
    fontWeight: 500,
    color: "#FFFFFF",
    fontFamily: "Nova",
  },
  Stacksubtitle: {
    fontSize: ".9rem",
    fontWeight: 300,
    color: "#FFFFFF",
  },
  GalleryBoxButton: {
    backgroundImage: `url(${gallery})`,
    backgroundSize: "cover",
    width: "100%",
    height: "30vw",
    borderRadius: "5vw",
    position: "relative",
    overflow:"hidden",
    cursor:"pointer"
  },
  CameraBoxButton: {
    backgroundImage: `url(${camera})`,
    backgroundSize: "cover",
    width: "100%",
    height: "30vw",
    borderRadius: "5vw",
    position: "relative",
    overflow:"hidden",
    cursor:"pointer"
  },
  Icon: {
    position: "absolute",
    right: ".5rem",
    top: "0",
    fontSize: "30vw",
    color: "#FFFFFF90",
    transform: "rotate(-15deg)",
  },
  StackButton: { width: "100%", height: "100%", px: "2rem" },
};
export default MediaMobile;
