import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Logo } from "../ContentFactory/IconFactory";

export default function LoginForm() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const HandleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "Email") setEmail(e.target.value);
    else setPassword(e.target.value);
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
        Login
      </Typography>
      <TextField
        name="Email"
        sx={classes.textField}
        value={Email}
        onChange={HandleChange}
        label="Email *"
        fullWidth
      />
      <TextField
        name="Password"
        type="password"
        sx={classes.textField}
        value={Password}
        onChange={HandleChange}
        label="Password *"
        fullWidth
      />
      <Typography sx={classes.paswd}>Forgot Password ?</Typography>
      <Typography sx={classes.desc}>
        By clicking Log in, you agree to our{" "}
        <span style={classes.link}>Terms</span>. Learn how we process your data
        in our <span style={classes.link}>Privacy Policy</span> and{" "}
        <span style={classes.link}>Cookie Policy</span>
      </Typography>
      <Button
        sx={classes.LoginButton}
        variant="contained"
        disabled={Email === "" || Password === "" ? true : false}
      >
        Login
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
