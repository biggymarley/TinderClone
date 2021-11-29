import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LogginContext } from "../../../App";
import { Logo } from "../../Home/ContentFactory/IconFactory";

const DraweHeader = ({ TabsIndex, setTabsIndex }) => {
  const { setIslogged } = useContext(LogginContext);

  return (
    <Toolbar sx={classes.HeaderRoot}>
      <Box sx={{ flexGrow: 1 }}>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Button
            onClick={() => setTabsIndex("ProfileTab")}
            sx={classes.UserButton}
            startIcon={
              <Avatar
                alt="profile-pic"
                src="https://picsum.photos/200/300"
                sx={{ width: 35, height: 35 }}
              />
            }
          >
            <Typography sx={classes.userName}>Biggy</Typography>
          </Button>
        </Link>
      </Box>
      <Stack direction="row" spacing={1}>
        {TabsIndex === "ProfileTab" ? (
          <Link to="/">
            <IconButton
              sx={classes.logoutButton}
              onClick={() => setTabsIndex("MainTab")}
            >
              <Logo sx={{ color: "#FFFFFF", fontSize: "1.5rem" }} />
            </IconButton>
          </Link>
        ) : (
          false
        )}

        <IconButton
          sx={classes.logoutButton}
          onClick={() => setIslogged(false)}
        >
          <PowerSettingsNewIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
      </Stack>
    </Toolbar>
  );
};

const classes = {
  HeaderRoot: {
    background: "linear-gradient(225deg,#ff6036,#fd267a)",
    height: { xs: "60px", lg: "73px" },
    px: ".5rem !important",
  },
  userName: {
    color: "#FFFFFF",
    fontFamily: "Nova",
    letterSpacing: "1px",
    fontSize: "1rem",
    textTransform: "capitalize",
    textDecoration: "none",
  },
  UserButton: {
    color: "#000000",
    borderRadius: "12em",
    textDecoration: "none",
  },
  logoutButton: {
    backgroundColor: "#00000020",
  },
  Logo: {
    width: { xs: "30px", md: "39.936px" },
    height: { xs: "40px", md: "52.97355px" },
    color: "secondary.main",
  },
};
export default DraweHeader;
