import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import {
  Button,
  Dialog,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useContext } from "react";
import { Facebook, Google, Logo } from "../ContentFactory/IconFactory";
import { DialogContext } from "./HomeRoot";
export default function DialogUser() {
  const { DialogStatus, setDialogStatus } = useContext(DialogContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Dialog
      onClose={() => setDialogStatus(false)}
      open={DialogStatus}
      fullScreen={matches ? false : true}
      sx={classes.root}
    >
      <IconButton sx={classes.close} onClick={() => setDialogStatus(false)}>
        <HighlightOffRoundedIcon sx={classes.closeIcon} />
      </IconButton>
      <Stack
        sx={classes.innerDialog}
        direction="column"
        spacing={3}
        alignItems="center"
      >
        <CreateAccount />
        <Avatars />
      </Stack>
    </Dialog>
  );
}

const CreateAccount = () => {
  return (
    <>
      <Logo sx={classes.logo} />
      <Typography variant="h3" sx={classes.TitleHead}>
        Create Account
      </Typography>
      <Typography sx={classes.desc}>
        By clicking Log in, you agree to our{" "}
        <span style={classes.link}>Terms</span>. Learn how we process your data
        in our <span style={classes.link}>Privacy Policy</span> and{" "}
        <span style={classes.link}>Cookie Policy</span>
      </Typography>
      {buttons.map((btn, index) => (
        <Button key={index} sx={classes.LoginButton} fullWidth>
          {btn.icon}
          {btn.label}
        </Button>
      ))}
      <Typography sx={classes.paswd}>Forgot Password ?</Typography>
      <Divider fullWidth sx={{ width: "100%" }} />
      <Typography sx={classes.TitleAvatars}>Check Our Githubs</Typography>
    </>
  );
};

const Avatars = () => {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://github.com/biggymarley";
        }}
      >
        <Avatar
          alt="Ayoub FARAGI"
          src="https://avatars.githubusercontent.com/u/58108317?v=4"
          sx={classes.avatar}
        />
      </IconButton>
      <IconButton
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://github.com/oboualla";
        }}
      >
        <Avatar
          alt="Omar BOUALLAM"
          src="https://avatars.githubusercontent.com/u/50252979?v=4"
          sx={classes.avatar}
        />
      </IconButton>
    </Stack>
  );
};
const classes = {
  root: {
    ".MuiDialog-paper": {
      display: "flex",
      alignItems: "center",
      borderRadius: { xs: 0, md: "8px" },
      position: "relative",
    },
  },
  close: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  closeIcon: { fontSize: "2rem", color: "#d4d8de" },
  LoginButton: {
    color: "#191e25",
    borderRadius: "12em",
    minHeight: "54px",
    border: "2px solid #505965",
    fontWeight: 600,
    fontSize: "1rem",
    position: "relative",
    px: { xs: "1.5rem", md: "3rem" },
  },
  innerDialog: {
    maxWidth: "400px",
    px: "44px",
    py: "30px",
    textAlign: "center",
  },
  logo: {
    fontSize: "3rem",
    color: "#FE3F61",
  },
  TitleHead: {
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontSize: "1.6rem",
    letterSpacing: "-1px",
    textTransform: "uppercase",
  },
  TitleAvatars: {
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontSize: "1.4rem",
    letterSpacing: "-1px",
    textTransform: "uppercase",
  },
  desc: {
    fontFamily: "Roboto",
    fontSize: ".9rem",
    fontWeight: 300,
  },
  paswd: {
    fontFamily: "Roboto",
    fontSize: ".9rem",
    fontWeight: 300,
    cursor: "pointer",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "none",
    },
  },
  link: {
    fontWeight: 900,
    textDecoration: "underline",
  },
  icon: {
    width: { xs: "1rem", md: "1.9rem" },
    height: { xs: "1rem", md: "1.9rem" },
    position: "absolute",
    left: 10,
  },
  avatar: { width: 56, height: 56 },
};

const buttons = [
  {
    label: "Log In With Google",
    icon: <Google sx={classes.icon} />,
  },
  {
    label: "Log In With Facebook",
    icon: <Facebook sx={classes.icon} />,
  },
  {
    label: "Log In With Email",
    icon: <AlternateEmailIcon sx={classes.icon} />,
  },
];
