import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { AppBar, Avatar, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogginContext } from "../../../App";
import {
  Logo,
  MatchesIcon,
  MessageIcon,
} from "../../Home/ContentFactory/IconFactory";
export default function TopAppbar() {
  const { setIslogged } = useContext(LogginContext);
  const location = useLocation();
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ top: 0, bottom: "auto", backgroundColor: "#FFFFFF" }}
    >
      <Toolbar variant="dense">
        <Box>
          <IconButton sx={classes.UserButton} style={{ width: 35, height: 35 }}>
            <Link to={"/profile"}>
              <Avatar
                alt="profile-pic"
                src="https://picsum.photos/200/300"
                sx={classes.userlogo}
                style={
                  location?.pathname?.search("profile") > 0
                    ? classes.activeOutline
                    : {}
                }
              />
            </Link>
          </IconButton>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo sx={classes.Logo} />
          <Typography sx={classes.LogoName}>matcha</Typography>
        </Box>
        <IconButton onClick={() => setIslogged(false)} sx={{ padding: 0 }}>
          <PowerSettingsNewIcon sx={classes.MobileIcons} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export const BottomAppbar = ({ setTabsIndex }) => {
  const { setIslogged } = useContext(LogginContext);
  const location = useLocation();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ top: "auto", bottom: 0, backgroundColor: "#FFFFFF" }}
    >
      <Toolbar
        variant="dense"
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Link to={"/"}>
          <IconButton onClick={() => setTabsIndex("MainTab")}>
            <Logo
              sx={classes.MobileIcons}
              style={location?.pathname === "/" ? classes.active : {}}
            />
          </IconButton>
        </Link>
        <Link to={"/matches"}>
          <IconButton onClick={() => setTabsIndex("Matches")}>
            <MatchesIcon
              sx={classes.MobileIcons}
              style={
                location?.pathname?.search("matches") > 0 ? classes.active : {}
              }
            />
          </IconButton>
        </Link>
        <Link to={"/messages"}>
          <IconButton onClick={() => setTabsIndex("Messages")}>
            <MessageIcon
              sx={classes.MobileIcons}
              style={
                location?.pathname?.search("messages") > 0 ? classes.active : {}
              }
            />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
const classes = {
  MobileIcons: {
    color: "#00000020",
    fontSize: "2rem",
    transition: "color .2s ease",
  },
  userlogo: { width: 35, height: 35 },
  UserButton: {
    color: "#000000",
    borderRadius: "12em",
    textDecoration: "none",
  },
  Logo: {
    width: { xs: "30px", md: "39.936px" },
    height: { xs: "40px", md: "52.97355px" },
    color: "secondary.main",
  },
  LogoName: {
    fontFamily: "Gotham",
    fontSize: { xs: "1.5rem", md: "2.4rem" },
    letterSpacing: "-1px",
    color: "secondary.main",
    "@media (max-width: 300px)": {
      display: "none",
    },
    display: "block",
  },
  active: {
    color: "#fe3f61",
  },
  activeOutline: {
    outline: "2px solid #fe3f61",
  },
};
