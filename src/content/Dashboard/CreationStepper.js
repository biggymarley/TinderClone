import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { Logo } from "../Home/ContentFactory/IconFactory";
import { Typography } from "@mui/material";
import { FormikProvider, useFormik, FormikContext } from "formik";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
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
  const formik = useFormik({
    initialValues: {
      Gender: "",
      SexualPreferences: "",
      Biografy: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container maxWidth="lg" sx={classes.StepperRppt}>
      <Typography variant="h3" sx={classes.TitleHead}>
        Create Account
      </Typography>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} rowSpacing={5}  sx={classes.Gridroot}>
            <Grid item xs={12} sm={6}>
              <Gender />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SexualPreferences />
            </Grid>
            <Grid item xs={12}>
              <Biografy />
            </Grid>
            <Grid item xs={12}>
              <UploadImages />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="secondary">
                submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormikProvider>
    </Container>
  );
};
const UploadImages = () => {
  return (
    <Box sx={classes.UploadRoot}>
      <Grid
        container
        spacing={5}
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems="center"
      >
        <Grid item>
          <Box sx={classes.ImgBox}>
            <AddCircleRoundedIcon sx={classes.addButton} />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={classes.ImgBox}>
            <AddCircleRoundedIcon sx={classes.addButton} />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={classes.ImgBox}>
            <AddCircleRoundedIcon sx={classes.addButton} />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={classes.ImgBox}>
            <AddCircleRoundedIcon sx={classes.addButton} />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={classes.ImgBox}>
            <AddCircleRoundedIcon sx={classes.addButton} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
const Biografy = () => {
  const formik = React.useContext(FormikContext);
  return (
    <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
      <Typography sx={classes.label}>Biografy</Typography>
      <TextField
        sx={classes.TextField}
        rows={4}
        multiline
        name="Biografy"
        value={formik.values.Biografy}
        onChange={formik.handleChange}
        fullWidth
        required
      />
    </Stack>
  );
};
const Gender = () => {
  const formik = React.useContext(FormikContext);
  return (
    <Stack direction="column" spacing={3}>
      <Typography sx={classes.label}>Gender</Typography>
      <Stack direction="row" spacing={2}>
        <div>
          <input
            type="radio"
            id="Woman"
            className="hiddenChebox"
            value={"Woman"}
            name="Gender"
            onChange={formik.handleChange}
            checked={formik?.values?.Gender === "Woman" ? true : false}
          />
          <Box className="VisibleChebox">
            <label htmlFor="Woman">Woman</label>
          </Box>
        </div>
        <div>
          <input
            type="radio"
            id="Man"
            className="hiddenChebox"
            value={"Man"}
            name="Gender"
            onChange={formik.handleChange}
            checked={formik?.values?.Gender === "Man" ? true : false}
          />
          <Box className="VisibleChebox">
            <label htmlFor="Man">Man</label>
          </Box>
        </div>
      </Stack>
    </Stack>
  );
};

const SexualPreferences = () => {
  const formik = React.useContext(FormikContext);
  return (
    <Stack direction="column" spacing={3}>
      <Typography sx={classes.label}>Sexual preferences</Typography>
      <Stack direction="row" spacing={2}>
        <div>
          <input
            type="radio"
            id="Heterosexual"
            className="hiddenChebox"
            value={"Heterosexual"}
            name="SexualPreferences"
            onChange={formik.handleChange}
            checked={
              formik?.values?.SexualPreferences === "Heterosexual"
                ? true
                : false
            }
          />
          <Box className="VisibleChebox">
            <label htmlFor="Heterosexual">Heterosexual</label>
          </Box>
        </div>
        <div>
          <input
            type="radio"
            id="Bi-sexual"
            className="hiddenChebox"
            value={"Bisexual"}
            name="SexualPreferences"
            onChange={formik.handleChange}
            checked={
              formik?.values?.SexualPreferences === "Bisexual" ? true : false
            }
          />
          <Box className="VisibleChebox">
            <label htmlFor="Bi-sexual">Bisexual</label>
          </Box>
        </div>
      </Stack>
    </Stack>
  );
};

const classes = {
  HeaderRoot: {
    p: { xs: ".5rem", sm: "1rem" },
    borderBottom: "1px solid #0000001a",
  },
  UploadRoot: {
    width: "calc(100%)",
    backgroundColor: "#f0f2f430",
    borderRadius: "10px",
    p: ".5rem",
  },
  ImgBox: {
    minHeight: "12rem",
    minWidth: "9rem",
    border: "1px solid #505965",
    borderRadius: "10px",
    position: "relative",
  },
  addButton: {
    position: "absolute",
    fontSize: "2rem",
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
    color: "secondary.main",
    top: "-.5rem",
    right: "-1rem",
    transition:"all .2s ease",
    cursor:"pointer",
    "&:hover" :{
      color: "secondary.light",
      backgroundColor: "#e0e0e0",
    }
  },
  StepperRppt: {
    display: "flex",
    flexDirection: "column",
    paddingTop: { xs: "2rem", sm: "4rem" },
    // alignItems: "center",
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
    fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
    textTransform: "uppercase",
    textAlign: { xs: "center", md: "start" },
    width: "100%",
    paddingBottom: { xs: "4rem", sm: "5rem" },
  },
  label: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    textTransform: "capitalize",
    fontWeight: 500,
  },
  Gridroot: {
    "& > .MuiGrid-item": {
      display: "flex",
      justifyContent: { xs: "flex-start", sm: "flex-start" },
      // alignItems: { xs: "center", sm: "flex-start" },
    },
  },
  TextField: {
    borderRadius: "10px",
    paddingBottom: { xs: "1rem", sm: "0" },
    "& textarea": {
      borderRadius: "10px !important",
    },
    "& textarea:valid ~ fieldset": {
      borderColor: "#fe3f61 !important",
      borderWidth: 2,
    },
    "& label.Mui-focused": {
      color: "secondary.main",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#505965",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "secondary.main",
      },
    },
    "& fieldset": {
      borderRadius: "10px",
    },
  },
};
