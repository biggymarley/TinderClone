import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Fade,
  IconButton,
  Stack,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { ChipFactory } from "../CreationStep/PassionsDialog";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
export default function HomeArea() {
  const [pics, setpics] = useState(1);
  const [searching, setsearching] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setsearching(true);
    }, 2000);
  }, []);
  const inctement = () => {
    if (pics >= 99) setpics(1);
    else setpics(pics + 1);
  };
  return (
    <Box sx={classes.root}>
      {!searching ? (
        <NoMatchingProfiles />
      ) : (
        <AvailableProfiles inctement={inctement} pics={pics} />
      )}
    </Box>
  );
}

const NoMatchingProfiles = () => {
  return (
    <Box sx={classes.NoMatchingRoot}>
      <Box sx={classes.userLogo}>
        <Avatar
          alt="profile-pic"
          src="https://picsum.photos/200/300"
          sx={classes.userAvatar}
        />
        <Box sx={classes.Radar} className="Radar" />
      </Box>
    </Box>
  );
};

const AvailableProfiles = ({ inctement, pics }) => {
  const [openPinfo, setopenPinfo] = useState(false);
  const Div = styled("div")({});
  const ToggleOpen = () => {
    setopenPinfo(!openPinfo);
    console.log(openPinfo);
  };

  return (
    <Box sx={classes.AvailableUserBox}>
      <Fade in={!openPinfo}>
        <Div sx={classes.ProfileWraper}>
          <PreviewProfile
            inctement={inctement}
            pics={pics}
            ToggleOpen={ToggleOpen}
          />
        </Div>
      </Fade>
      <Fade in={openPinfo}>
        <div style={{ width: "100%", height: "100%" }}>
          <DetailedUserInfos
            pics={pics}
            ToggleOpen={ToggleOpen}
            inctement={inctement}
          />
        </div>
      </Fade>
    </Box>
  );
};

const DetailedUserInfos = ({ pics, ToggleOpen, inctement }) => {
  return (
    <Box sx={classes.AvailableUserInfos} className="hidescrollbar">
      <Box sx={classes.imgwraper}>
        <img
          src={`https://randomuser.me/api/portraits/women/${pics}.jpg`}
          alt="user-gallery"
          style={classes.UserDetailedImage}
        />
        <Box sx={classes.BottomShadowdetailed} />
        <IconButton sx={classes.DownButton} onClick={ToggleOpen}>
          <ArrowDownwardRoundedIcon />
        </IconButton>
      </Box>
      <InfoStack color={true} noStatus={true} />
      <Divider />
      <Grid container spacing={1} sx={{ padding: "1rem" }}>
        <Grid item xs={12}>
          <Typography variant="span" sx={classes.passionsTitle} paragraph>
            Passions
          </Typography>
        </Grid>
        <ChipFactory hoobies={hoobies} formik={false} HandlHoobies={false} />
      </Grid>
      <Divider />
      <Box display="grid" placeItems="center" minHeight="60px">
        <Button sx={classes.reportButton}>Report Name</Button>
      </Box>
      <Divider />
      <Box minHeight="30px" />
      <ButtonsStack inctement={inctement} contained={true} />
    </Box>
  );
};

const PreviewProfile = ({ inctement, pics, ToggleOpen }) => {
  const Img = styled("img")({});
  return (
    <Box sx={classes.AvailableUserImages}>
      <Img
        src={`https://randomuser.me/api/portraits/women/${pics}.jpg`}
        alt="user-gallery"
        sx={classes.UserImage}
      />

      <InfoStack ToggleOpen={ToggleOpen} />
      <ButtonsStack inctement={inctement} />
      <Box sx={classes.BottomShadow}></Box>
      <BrowseImgs />
    </Box>
  );
};

const BrowseImgs = () => {
  return (
    <Grid container sx={classes.BrowseImgs}>
      <Grid item xs={6} sx={{ display: "flex" }}>
        <IconButton sx={classes.navigationButton} disableRipple>
          <ChevronLeftRoundedIcon sx={{ color: "#FFFFFF", fontSize: "3rem" }} />
        </IconButton>
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton sx={classes.navigationButton} disableRipple>
          <ChevronRightRoundedIcon
            sx={{ color: "#FFFFFF", fontSize: "3rem", justifySelf:"flex-start" }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

const InfoStack = ({ inctement, ToggleOpen, color, noStatus }) => {
  const p = window.innerHeight > 470 ? "1rem" : "15%";
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={classes.InfoStack}
      style={
        noStatus ? { position: "static", width: "auto" } : { paddingBottom: p }
      }
    >
      <div style={{ position: "relative", width: "100%" }}>
        <Stack direction="column" spacing={1}>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                variant="span"
                sx={classes.userName}
                style={color ? { color: "#000000" } : {}}
              >
                Name
              </Typography>
              <Typography
                variant="span"
                sx={classes.age}
                style={color ? { color: "#000000" } : {}}
              >
                26
              </Typography>
            </Stack>
            {noStatus ? (
              false
            ) : (
              <Stack direction="row" spacing={1} alignItems="center">
                <FiberManualRecordIcon
                  sx={classes.connectionStatus}
                  style={{ color: "#2df187" }}
                />
                <Typography sx={classes.connectionStatus}>
                  recently active
                </Typography>
              </Stack>
            )}
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOnOutlinedIcon
              sx={classes.mailes}
              style={color ? { color: "#000000", opacity: ".5" } : {}}
            />
            <Typography
              sx={classes.mailes}
              style={color ? { color: "#000000", opacity: ".5" } : {}}
            >
              121 Kilometres away
            </Typography>
          </Stack>
        </Stack>
        {noStatus ? (
          false
        ) : (
          <IconButton sx={classes.infoButton} onClick={ToggleOpen}>
            <InfoRoundedIcon sx={classes.InfoIcon} />
          </IconButton>
        )}
      </div>
    </Stack>
  );
};

const ButtonsStack = ({ inctement, contained }) => {
  return (
    <Stack
      direction="row"
      sx={classes.ButtonStack}
      justifyContent="space-evenly"
      style={contained ? { position: "sticky" } : {}}
    >
      <IconButton
        sx={contained ? classes.contained : classes.crossButton}
        onClick={inctement}
      >
        <ClearRoundedIcon sx={classes.cross} />
      </IconButton>
      <IconButton
        sx={contained ? classes.contained : classes.hearthButton}
        onClick={inctement}
      >
        <FavoriteRoundedIcon sx={classes.hearth} />
      </IconButton>
    </Stack>
  );
};

const classes = {
  root: {
    height: { xs: "calc(100vh - 100px)", md: "100vh" },
    display: { xs: "block", md: "grid" },
    placeItems: "center",
  },
  DownButton: {
    position: "absolute",
    background: "linear-gradient(225deg,#ff6036,#fd267a)",
    color: "#FFFFFF",
    bottom: "-15px",
    right: "20px",
  },
  ProfileWraper: {
    width: { xs: "99%", md: "100%" },
    height: "100%",
    position: "absolute",
  },
  BrowseImgs: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
  },
  navigationButton: { color: "#FFFFFF", width: "100%", borderRadius: "0", background:"transparent !important"  },

  reportButton: {
    color: "#000000",
    opacity: 0.3,
    fontFamily: "Nova",
    borderRadius: "0",
    transition: "opacity .5s ease",
    "&:hover": {
      opacity: 0.5,
    },
  },
  AvailableUserBox: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: { xs: "100%", md: "370px" },
    height: { xs: "100%", md: "640px" },
    borderRadius: "10px",
    boxShadow: {
      xs: "none",
      md: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    },
  },
  NoMatchingRoot: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "grid",
    placeItems: "center",
  },
  userAvatar: {
    width: "7rem",
    height: "7rem",
    border: "2px solid #FFFFFF",
    zIndex: "2",
  },
  Radar: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    margin: "auto",
    width: "1rem",
    height: "1rem",
    borderRadius: "50%",
    color: "secondary.main",
    border: ".3rem solid ",
    zIndex: "1",
    opacity: 1,
    backgroundColor: "#fe3f618c",
  },
  AvailableUserImages: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    position: "relative",
    backgroundColor: { xs: "#000000", md: "transparent" },
  },
  AvailableUserInfos: {
    backgroundColor: "#FFFFFF",
    borderRadius: { xs: "0", md: "10px" },
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
  UserImage: {
    width: "100%",
    height: "100%",
    objectFit: { xs: "contain", md: "cover" },
    borderRadius: "10px",
  },
  UserDetailedImage: {
    width: "100%",
    objectFit: "cover",
    height: "100%",
  },
  imgwraper: {
    width: "100%",
    position: "relative",
    height: { xs: "auto", md: "70%" },
  },
  BottomShadowdetailed: {
    position: "absolute",
    top: 0,
    borderRadius: "10px 10px 0 0",
    width: "100%",
    height: "100%",
    boxShadow: "rgba(0, 0, 0, 0.70) 0px -70px 36px -28px inset",
  },
  BottomShadow: {
    position: "absolute",
    top: 0,
    borderRadius: "10px",
    width: "100%",
    height: "100%",
    boxShadow: "inset 0px -15rem 5rem -70px #000000",
  },
  ButtonStack: {
    position: "absolute",
    width: "100%",
    bottom: "1rem",
    zIndex: 3,
  },
  InfoStack: {
    position: "absolute",
    width: "100%",
    p: "1rem",
    bottom: "12%",
    zIndex: 3,
    color: "#FFFFFF",
  },
  crossButton: {
    color: "secondary.main",
    border: "1px solid ",
  },
  contained: {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    backgroundColor: "#FFFFFF !important",
  },
  hearthButton: {
    color: "#21d07c",
    border: "1px solid ",
  },
  cross: {
    color: "secondary.main",
    width: { xs: "1.5rem", sm: "2.5rem" },
    height: { xs: "1.5rem", sm: "2.5rem" },
    transition: "all .2s",
    "&:hover": {
      transform: "scale(1.08)",
    },
  },
  hearth: {
    color: "#21d07c",
    width: { xs: "1.5rem", sm: "2.5rem" },
    height: { xs: "1.5rem", sm: "2.5rem" },
    transition: "all .2s",
    "&:hover": {
      transform: "scale(1.08)",
    },
  },
  userName: {
    fontFamily: "Nova",
    fontSize: { xs: "1.2rem", sm: "2rem" },
    textTransform: "capitalize",
  },
  age: {
    fontFamily: "Roboto",
    fontSize: { xs: "1rem", sm: "1.5rem" },
    fontWeight: 300,
  },
  connectionStatus: {
    fontFamily: "Roboto",
    fontSize: { xs: ".7rem", sm: ".9rem" },
    fontWeight: 300,
    textTransform: "capitalize",
  },
  mailes: {
    fontFamily: "Nova",
    fontSize: { xs: ".8rem", sm: "1.1rem" },
    fontWeight: 300,
    opacity: 0.8,
    textTransform: "capitalize",
  },
  infoButton: {
    position: "absolute",
    right: "1.5rem",
    bottom: "6px",
    color: "#FFFFFF",
  },
  InfoIcon: { fontSize: { xs: "1.5rem", sm: "2rem" } },
  passionsTitle: {
    fontSize: { xs: ".9rem", sm: "1rem" },
    fontWeight: "500",
    fontFamily: "Roboto",
  },
};

const hoobies = [
  "Emancipation",
  "Engagement",
  "Development",
  "Nutrition",
  "Europe",
];
