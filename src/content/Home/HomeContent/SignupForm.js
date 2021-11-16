import React, { useState } from "react";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Logo } from "../ContentFactory/IconFactory";

export default function LoginForm() {
  const [Email, setEmail] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Rpassword, setRpassword] = useState("");
  const HandleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "Email") setEmail(e.target.value);
    else if (e.target.name === "Firstname") setFirstname(e.target.value);
    else if (e.target.name === "Lastname") setLastname(e.target.value);
    else if (e.target.name === "Username") setUsername(e.target.value);
    else if (e.target.name === "Password") setPassword(e.target.value);
    else if (e.target.name === "Rpassword") setRpassword(e.target.value);
  };

  const checkEmpty = () => {
    return Email === "" ||
      Password === "" ||
      Firstname === "" ||
      Lastname === "" ||
      Username === "" ||
      Rpassword === ""
      ? true
      : false;
  };
  return (
    <Stack
      sx={classes.innerDialog}
      direction="column"
      spacing={3}
      alignItems="center"
    >
      <Logo sx={classes.logo} />
      <Typography variant="h3" sx={classes.TitleHead}>
        Create Account
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="Firstname"
            sx={classes.textField}
            value={Firstname}
            onChange={HandleChange}
            label="Firstname *"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="Lastname"
            sx={classes.textField}
            value={Lastname}
            onChange={HandleChange}
            label="Lastname *"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="Email"
            sx={classes.textField}
            value={Email}
            onChange={HandleChange}
            label="Email *"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="Username"
            sx={classes.textField}
            value={Username}
            onChange={HandleChange}
            label="Username *"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="Password"
            type="password"
            sx={classes.textField}
            value={Password}
            onChange={HandleChange}
            label="Password *"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="Rpassword"
            type="password"
            sx={classes.textField}
            value={Rpassword}
            onChange={HandleChange}
            label="Repeat Password *"
            fullWidth
          />
        </Grid>
      </Grid>
      <Button
        sx={classes.LoginButton}
        variant="contained"
        disabled={checkEmpty()}
      >
        Create Account
      </Button>
    </Stack>
  );
}

const classes = {
  innerDialog: {
    maxWidth: "400px",
    width: "80vw",
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
  desc: {
    fontFamily: "Roboto",
    fontSize: ".8rem",
    fontWeight: 300,
  },
  link: {
    fontWeight: 500,
    textDecoration: "underline",
  },
  LoginButton: {
    color: "#FFFFFF",
    background: "linear-gradient(225deg,#ff6036,#fd267a)",
    borderRadius: "12em",
    minHeight: "54px",
    fontWeight: 600,
    fontSize: "1rem",
    position: "relative",
    width: "80%",
    px: { xs: "1.5rem", md: "3rem" },
    "&.Mui-disabled": {
      background: "#f0f2f4 !important",
    },
  },
  disabled: {
    background: "#f0f2f4 !important",
  },
  textField: {
    borderRadius: "2em",
    "& input": {
      borderRadius: "2em !important",
    },
    "& label.Mui-focused": {
      color: "#505965",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#505965",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#505965",
      },
    },
    "& fieldset": {
      borderRadius: "2em",
    },
  },
  paswd: {
    fontFamily: "Roboto",
    fontSize: ".9rem",
    fontWeight: 300,
    opacity: 0.7,
    cursor: "pointer",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "none",
    },
  },
};