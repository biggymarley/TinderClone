import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import React from "react";
import { Logo } from "../ContentFactory/IconFactory";
export const StickyHeader = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <AppBar position="sticky" color="transparent" sx={classes.Header}>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton sx={{ borderRadius: "0" }}>
            <Logo sx={classes.Logo} />
            <Typography sx={classes.LogoName}>matcha</Typography>
          </IconButton>
        </Box>
        {matches ? <WebRender /> : <MobileRender />}
      </Toolbar>
    </AppBar>
  );
};

const WebRender = () => {
  return <Button sx={classes.LoginButton}>Log in</Button>;
};
const MobileRender = () => {
  return (
    <IconButton>
      <MenuRoundedIcon sx={{color:"#FFFFFF"}}/>
    </IconButton>
  );
};

const classes = {
  Header: {
    boxShadow: "inset 0px 44px 29px -17px #000000",
    px: {xs: ".2rem",sm: ".5rem", lg:"1rem"},
  },
  Logo: {
    width: { xs: "30px", md: "39.936px" },
    height: { xs: "40px", md: "52.97355px" },
  },
  LogoName: {
    fontFamily: "Gotham",
    fontSize: { xs: "1.5rem", md: "2.4rem" },
    color: "white",
    lightHeight: "0",
    letterSpacing: "-2px",
  },
  LoginButton: {
    backgroundColor: "#FFFFFF",
    color: "#d6002f",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1rem",
    fontWeight: "600",
    px: "24px",
    minHeight: "40px",
    textTransform: "capitalize",
  },
};
