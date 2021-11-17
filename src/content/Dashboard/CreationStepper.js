import { Box, Checkbox, Container, Grid, Stack } from "@mui/material";
import React from "react";
import { Logo } from "../Home/ContentFactory/IconFactory";
import { Typography } from "@mui/material";

export default function CreationStepper() {
  return (
    <>
      <SimpleHeader />
      <Stepper />
    </>
  );
}

const SimpleHeader = () => {
  return (
    <Box sx={classes.HeaderRoot}>
      <Stack direction="row" spacing={0} alignItems="center">
        <Logo sx={classes.Logo} />
        <Typography sx={classes.LogoName}>matcha</Typography>
      </Stack>
    </Box>
  );
};

const Stepper = () => {
  return (
    <Container maxWidth="lg" sx={classes.StepperRppt}>
      <Typography variant="h3" sx={classes.TitleHead}>
        Create Account
      </Typography>
      <Grid container spacing={2}>
        <Grid>
          <input type="radio" name="s-size" id="Man" className="hiddenChebox"  />
          <label htmlFor="Man"  className="VisibleChebox">
            Man
          </label>
        </Grid>
        <Grid>
        <input type="radio" name="s-size" id="Woman" className="hiddenChebox"  />
          <label htmlFor="Woman"  className="VisibleChebox">
            Woman
          </label>
        </Grid>
        <Grid></Grid>
      </Grid>
    </Container>
  );
};

const classes = {
  HeaderRoot: {
    p: { xs: ".5rem", sm: "1rem" },
    borderBottom: "1px solid #0000001a",
  },
  StepperRppt: {
    display: "flex",
    flexDirection: "column",
    paddingTop: { xs: "2rem", sm: "4rem" },
    alignItems: "center",
  },
  Logo: {
    fontSize: { xs: "2rem", sm: "3rem" },
    color: "#FE3F61",
  },
  LogoName: {
    fontFamily: "Gotham",
    fontSize: { xs: "1.5rem", sm: "2.4rem" },
    color: "#000000",
    letterSpacing: "-3px",
  },
  TitleHead: {
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
    textTransform: "uppercase",
  },
};
