import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Container, Dialog, Grid, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FormikContext } from "formik";
import React, { useState } from "react";
import { hoobies } from "../../../assets/hoobies";
export default function PassionsDialog({ CloseDialog, open }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const formik = React.useContext(FormikContext);
  const [error, setError] = useState(false);
  const HandlHoobies = (e) => {
    if (formik?.values) {
      if (
        !formik?.values?.hoobies.includes(e.target.getAttribute("name")) &&
        formik.values.hoobies.length <= 4
      )
        formik.setFieldValue("hoobies", [
          ...formik?.values?.hoobies,
          e.target.getAttribute("name"),
        ]);
      else
        formik.setFieldValue(
          "hoobies",
          formik?.values?.hoobies.filter(
            (hoobie) => hoobie !== e.target.getAttribute("name")
          )
        );
      if (formik.values.hoobies.length >= 2) setError(false);
    }
  };

  const CheckBeforeClose = () => {
    if (formik.values.hoobies.length < 3) setError(true);
    else {
      setError(false);
      CloseDialog();
    }
  };

  return (
    <Dialog
      onClose={CheckBeforeClose}
      open={open}
      fullScreen={matches ? false : true}
      sx={classes.root}
    >
      <IconButton sx={classes.close} onClick={CheckBeforeClose}>
        <HighlightOffRoundedIcon sx={classes.closeIcon} />
      </IconButton>
      <Container maxWidth="md">
        <Typography sx={classes.desc}>
          Select passions that you’d like to share with the people you connect
          with. Choose a minimum of 3 and maximum of 5.
        </Typography>
        {error ? (
          <Typography sx={classes.error} color="error">
            Choose a minimum of 3.
          </Typography>
        ) : (
          false
        )}
        <Grid
          container
          spacing={1}
          sx={{ paddingBottom: "2rem" }}
          justifyContent="center"
        >
          <ChipFactory
            hoobies={hoobies}
            formik={formik}
            HandlHoobies={HandlHoobies}
          />
        </Grid>
      </Container>
    </Dialog>
  );
}

export const ChipFactory = ({ hoobies, formik, HandlHoobies }) => {
  return hoobies.map((hoobie, index) => (
    <Grid item key={index}>
      <Typography
        sx={classes.hoobie}
        name={hoobie}
        style={formik.values.hoobies.includes(hoobie) ? classes.choosen : {}}
        onClick={HandlHoobies ? HandlHoobies : () => {}}
      >
        {hoobie}
      </Typography>
    </Grid>
  ));
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
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  closeIcon: {
    fontSize: "2rem",
    color: "#d4d8de",
    transition: "transform .2s ease",
    "&:hover": {
      transform: "rotate(90deg)",
    },
  },
  desc: {
    fontFamily: "Roboto",
    fontSize: ".9rem",
    fontWeight: 300,
    textAlign: "center",
    mt: "4rem",
    paddingBottom: "2rem",
    opacity: 0.5,
  },
  error: {
    fontFamily: "Roboto",
    fontSize: ".9rem",
    fontWeight: 300,
    textAlign: "center",
    paddingBottom: "2rem",
  },
  hoobie: {
    fontFamily: "Roboto",
    fontWeight: 400,
    border: "1px solid #505965",
    p: "15px",
    color: "#505965",
    whiteSpace: "nowrap",
    lineHeight: "0",
    fontSize: "14px",
    borderRadius: "12em",
    opacity: 0.7,
    transition: "all .2s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.08)",
    },
  },
  choosen: {
    border: "1px solid #fe3f61",
    color: "#fe3f61",
    opacity: 1,
  },
};
